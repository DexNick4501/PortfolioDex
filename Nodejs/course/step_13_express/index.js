let express = require('express');
let port = 81;
let app = express();

app.get('/', function(req, res) {
    res.send("is main page");
});
app.get('/about', function(req, res) {
    res.send("is about page");
});
app.get('/news/:id', function(req, res) {
    res.send("Is a news page! News ~" + req.params.id);
});

app.listen(port);