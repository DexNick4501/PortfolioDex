let express = require('express');
let bodyParser = require('body-parser');
let port = 81;
let app = express();

let urlencoderParser = bodyParser.urlencoded({extended: false});


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
});
app.post('/about', urlencoderParser, function(req, res) {
    if (!req.body) return req.sendStatus(400);
    console.log(req.body);
    res.render('about');
});
app.get('/news/:id', function(req, res) {
    res.render('news', {newsId: req.params.id});
});

app.listen(port);