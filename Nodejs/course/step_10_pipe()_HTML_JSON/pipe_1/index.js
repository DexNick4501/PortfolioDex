let fs = require('fs');

let myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8');
let myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.pipe(myWriteShort);