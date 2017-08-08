var express=require('express');
var todoController=require('./controllers/todoController');


var app=express();


//Set up template Engine
app.set('view engine','ejs');
app.set('port', (process.env.PORT || 3000))


//Static Files
app.use(express.static('./public'));




//fire controller
todoController(app);




//listen to port
app.listen(app.get('port'), function(){

console.log('You are listening to port ' ,app.get('port'));
});
