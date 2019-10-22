let fs = require('fs');

let text_f = fs.readFile('text.txt', 'utf-8', function (err, data) {
    console.log('Success read file');
    console.log(data);
});
fs.writeFile('text_send.txt', "What are you doing?! You're not hack my computakter?!", function (err, data) {
    console.log('Success write file');
});