// var express = require('express'); // importando a lib express
// var app = express();
// var bodyParser = require('body-parser');

// app.use(express.static('public'));
// app.use(bodyParser.json());  //o body parser recebe um json e transforma em objeto para o servidor

// app.get('/', function(req, res){
// 	res.redirect('/');

// });

// app.listen(3000, function(){
// 	console.log('Servidor rodando na porta 3000!');
// });


var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


