const express = require('express');
const bodyParser = require('body-parser');
const lodash = require('lodash');

const homeStartingContent = 'This is home Page. Coruscant ben biggs watto yoda moff. Skywalker kessel cade gamorrean ackbar. Leia skywalker jawa utapau skywalker fett. Qui-gon biggs wicket grievous. Jango yoda binks skywalker dagobah dooku yoda. Jabba boba sidious lando. Solo wedge mon obi-wan skywalker. Fisto boba darth utapau darth wedge. Naboo greedo ben darth darth. Vader dooku obi-wan mothma boba amidala. Yavin mothma coruscant binks. Darth sebulba binks skywalker. Skywalker skywalker darth jade kamino sith moff moff fett. Biggs c-3po hoth antilles qui-gon moff.';
const aboutContent = 'This is about us Page. Coruscant ben biggs watto yoda moff. Skywalker kessel cade gamorrean ackbar. Leia skywalker jawa utapau skywalker fett. Qui-gon biggs wicket grievous. Jango yoda binks skywalker dagobah dooku yoda. Jabba boba sidious lando. Solo wedge mon obi-wan skywalker. Fisto boba darth utapau darth wedge. Naboo greedo ben darth darth. Vader dooku obi-wan mothma boba amidala. Yavin mothma coruscant binks. Darth sebulba binks skywalker. Skywalker skywalker darth jade kamino sith moff moff fett. Biggs c-3po hoth antilles qui-gon moff.';
const contactContent = 'This is contact us Page. Coruscant ben biggs watto yoda moff. Skywalker kessel cade gamorrean ackbar. Leia skywalker jawa utapau skywalker fett. Qui-gon biggs wicket grievous. Jango yoda binks skywalker dagobah dooku yoda. Jabba boba sidious lando. Solo wedge mon obi-wan skywalker. Fisto boba darth utapau darth wedge. Naboo greedo ben darth darth. Vader dooku obi-wan mothma boba amidala. Yavin mothma coruscant binks. Darth sebulba binks skywalker. Skywalker skywalker darth jade kamino sith moff moff fett. Biggs c-3po hoth antilles qui-gon moff.';

const app = express();
const port = 3000;

// set up express view engine view
app.set('view engine', 'ejs');
// use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
// use static files
app.use(express.static('public'));

const posts = [];

app.get('/', function (req, res) {
    res.render('home', {homeStartingContent: homeStartingContent, posts: posts});
});

app.get('/about', function (req, res) {
    res.render('about', {aboutContent: aboutContent});
});

app.get('/contact', function (req, res) {
    res.render('contact', {contactContent: contactContent});
});

app.get('/compose', function (req, res) {
    res.render('compose');
});

app.post('/compose', function (req, res) {
    const post = {
        title: req.body.postTitle,
        body: req.body.postContent,
    }
    
    posts.push(post);
    res.redirect('/');
});

app.get('/posts/:title', function (req, res) {
    const title = lodash.lowerCase(req.params.title);
    
    posts.forEach(function(post) {
        if (post.title.toLowerCase() === title) {
            // console.log('Match Found!');
            res.render('post', {post: post});
        }
    });
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});