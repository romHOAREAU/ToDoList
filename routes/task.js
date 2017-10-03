var express = require('express');
var router = express.Router();

var taskControllers = require('../controllers/taskControllers'); //fait par Romain

/* GET home page. */
//fait par Romain (ligne 8-10)
router.get('/list', taskControllers.task_list);
router.get('/detail', taskControllers.task_detail);
router.get('/post', taskControllers.task_ajout_post);

module.exports = router;