const express = require("express");
const cors = require("cors");
const app = express();
const cars = require("./routes/cars");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/cars", cars);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Connected to port ${port}.`);
});
// app.listen(4000)
