let express = require('express');
let port = 81;
let app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
});
app.get('/news/:id', function(req, res) {
    res.render('news', {newsId: req.params.id});
});

app.listen(port);