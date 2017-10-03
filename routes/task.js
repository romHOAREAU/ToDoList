var express = require('express');
var router = express.Router();

var taskControllers = require('../controllers/taskControllers');

/* GET home page. */
router.get('/list', taskControllers.task_list);
router.get('/detail', taskControllers.task_detail);
router.get('/post', taskControllers.task_ajout_post);

module.exports = router;