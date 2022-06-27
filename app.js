const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// set up express view engine view
app.set('view engine', 'ejs');
// use static files
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});