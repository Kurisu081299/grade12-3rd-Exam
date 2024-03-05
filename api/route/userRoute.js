const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getGrade11Data);
router.post("/post", userControllers.postGrade11Data);
router.put("/put", userControllers.putGrade11Data);
router.delete("/del", userControllers.deleteGrade11Data);

module.exports = router;