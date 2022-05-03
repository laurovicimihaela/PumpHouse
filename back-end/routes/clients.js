const express = require("express");
const router = express.Router();
const Client = require("../models/client");

// Getting all
router.get("/", async (req, res) => {
    try {
        const client = await Client.find();
        res.json(client);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One
router.get("/:id", getClient, (req, res) => {
    res.json(res.client);
});

// Creating one
router.post("/", async (req, res) => {
    const client = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    });
    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating One
router.patch("/:id", getClient, async (req, res) => {
    if (req.body.firstName != null) {
        res.client.firstName = req.body.firstName;
    }
    if (req.body.lastName != null) {
        res.client.lastName = req.body.lastName;
    }
    if (req.body.email != null) {
        res.client.email = req.body.email;
    }
    if (req.body.phoneNumber != null) {
        res.client.phoneNumber = req.body.phoneNumber;
    }
    try {
        const updatedClient = await res.client.save();
        res.json(updatedClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete("/:id", getClient, async (req, res) => {
    try {
        await res.client.remove();
        res.json({ message: "Deleted client" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getClient(req, res, next) {
    let client;
    try {
        client = await Client.findById(req.params.id);
        if (client == null) {
            return res.status(404).json({ message: "Cannot find client" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.client = client;
    next();
}

module.exports = router;
