const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getGrade12Data);
router.post("/post", userControllers.postGrade12Data);
router.put("/put", userControllers.putGrade12Data);
router.delete("/del", userControllers.deleteGrade12Data);

module.exports = router;