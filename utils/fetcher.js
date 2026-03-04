import axios from "axios";

export async function fetchJSON(url) {
    try {
        const res = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });
        return res.data;
    } catch (err) {
        return null;
    }
}
