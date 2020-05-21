const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await db.executeQuery("SELECT * FROM Car");
        res.send(result.data);
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3900;
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
