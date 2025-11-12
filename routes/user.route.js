const express = require('express');
const {  createUser, getSingleUser, getUser, updateUser, updateUserPartial, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

// Create
router.post("/create", createUser);

// Read All Users
router.get("/read", getUser);

// Read Single User by ID
router.get("/read/:id",getSingleUser);

// Update (Complete update) - PUT
router.put("/update/:id", updateUser);

// Update (Partial update) - PATCH
router.patch("/update/:id", updateUserPartial);

// Delete
router.delete("/delete/:id", deleteUser);

module.exports = router;
