const express = require('express');
const router = express.Router();
const { executePush } = require('./code-push.controller');

router.post("/execute", executePush);

module.exports = router;
