const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


function string_square(s) {

  var value = 0;

  if (typeof s === 'string') {
    return Math.pow(s.length, 2);
  } else
    return -1;

}

// Percorsi per gestire le richieste 

app.get('/', function (req, res) {
  res.send('You are in the main route!');
});


app.get('/square', function (req, res) {

  var s = req.query.string

  var quadrato = string_square(s);

  res.status(200).json({
    'result': quadrato
  });

});

// Server in ascolto sulla porta ...
app.listen(port, function () {
  console.log('Server running on port ', port);
});