import express from "express";
import { fetchJSON } from "../utils/fetcher.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const c = req.query.c || "apps";

    const url = `https://apkpure.com/api/v1/search?q=${encodeURIComponent(c)}`;
    const data = await fetchJSON(url);

    if (!data || !data.data) return res.json([]);

    const results = data.data.map(app => ({
        id: app.package,
        title: app.title,
        icon: app.icon,
        description: app.description || ""
    }));

    res.json(results);
});

export default router;
