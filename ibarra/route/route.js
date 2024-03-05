const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// List of Stories
router.get("/get", controller.getgrade12_db);
router.post("/post", controller.postgrade12_db);
router.put("/put", controller.putgrade12_db);
router.delete("/del", controller.deletegrade12_db);

module.exports = router;