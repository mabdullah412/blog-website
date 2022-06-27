const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const homeStartingContent = 'Coruscant ben biggs watto yoda moff. Skywalker kessel cade gamorrean ackbar. Leia skywalker jawa utapau skywalker fett. Qui-gon biggs wicket grievous. Jango yoda binks skywalker dagobah dooku yoda. Jabba boba sidious lando. Solo wedge mon obi-wan skywalker. Fisto boba darth utapau darth wedge. Naboo greedo ben darth darth. Vader dooku obi-wan mothma boba amidala. Yavin mothma coruscant binks. Darth sebulba binks skywalker. Skywalker skywalker darth jade kamino sith moff moff fett. Biggs c-3po hoth antilles qui-gon moff.';
const aboutContent = '';
const contactContent = '';

const app = express();
const port = 3000;

// set up express view engine view
app.set('view engine', 'ejs');
// use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
// use static files
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {homeStartingContent: homeStartingContent});
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});