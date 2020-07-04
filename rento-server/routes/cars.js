const express = require("express");
const router = express.Router();
const db = require("../database/db");
const { Car, validateCar } = require("../models/car");

router.get("/", async (req, res) => {
    try {
        const result = await db.executeQuery(
            "SELECT *FROM [Car] INNER JOIN [CarType] ON [Car].typeName = [CarType].typeName INNER JOIN [Location] ON [Car].locationId = [Location].locationId"
        );
        res.send(result.data);
    } catch (error) {
        console.log(error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const result = await db.executeQuery(
            `SELECT * FROM Car WHERE CarId = ${req.params.id}`
        );
        res.send(result.data);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
