var express = require('express');
var router = express.Router();
var todos = [];
/* GET home page. */
router.get('/', function(req, res) {
  var indexToKill = req.query.kill;
  if(indexToKill!==undefined){
    todos.splice(indexToKill, 1);
  }
  res.render('index', { title: 'My todo app', todo: todos });
});

router.post('/add', function(req, res) {
  var todostuff = req.body.todo;
  if(todostuff !== ""){
    todos.push(todostuff);
  }
  res.redirect('/todos');
});
module.exports = router;
