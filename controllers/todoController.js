var bodyParser = require('body-parser');
var mongoose= require('mongoose');

mongoose.connect('mongodb://wish:wish@ds115701.mlab.com:15701/wish');

var todoSchema= new mongoose.Schema({

item: String

});

var Todo=  mongoose.model('Todo',todoSchema);




var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var data=[{item:'Get Milk'},{item:'Kick Soumya'},{item:'Will stydy node.js'}];
module.exports=function(app){
app.get('/todo',function(req,res){

  //Get Data from database and Show
  Todo.find({}, function(err,data){

    if(err) throw err;
    res.render('todo',{todos:data});
});
  });
app.post('/todo', urlencodedParser, function(req,res){
var newTodo= Todo(req.body).save(function(err,data){

  if(err) throw err;
  res.json(data);
});
  });

app.delete('/todo/:item',function(req,res){

Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){

  if(err) throw err;
  res.json(data);
});

  });

};
