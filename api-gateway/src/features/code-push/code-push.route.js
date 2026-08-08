const express = require('express');
const router = express.Router();
const { executePush } = require('./code-push.controller');
const validatePush = require('./code-push.middleware');

router.post("/execute", validatePush, executePush);

module.exports = router;
