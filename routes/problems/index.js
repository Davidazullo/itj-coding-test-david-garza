const express = require('express');

const problem_1_controller = require('./problem-1-controller');
const problem_2_controller = require('./problem-2-controller');

const router = express.Router();

router.get('/1', problem_1_controller);
router.get('/2', problem_2_controller);

module.exports = router;
