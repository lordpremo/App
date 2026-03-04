import express from "express";
import cors from "cors";

import searchRoute from "./routes/search.js";
import appRoute from "./routes/app.js";
import trendingRoute from "./routes/trending.js";
import categoryRoute from "./routes/category.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({ status: "Broken Play API is running" });
});

app.use("/search", searchRoute);
app.use("/app", appRoute);
app.use("/trending", trendingRoute);
app.use("/category", categoryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API running on port " + PORT));
