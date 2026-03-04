import express from "express";
import { fetchJSON } from "../utils/fetcher.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const id = req.query.id;
    if (!id) return res.json({ error: "Missing id" });

    const url = `https://apkpure.com/api/v1/apps/${id}`;
    const data = await fetchJSON(url);

    if (!data) return res.json({ error: "App not found" });

    res.json({
        id: id,
        title: data.title,
        icon: data.icon,
        description: data.description,
        screenshots: data.screenshots || [],
        download: data.download_url
    });
});

export default router;
