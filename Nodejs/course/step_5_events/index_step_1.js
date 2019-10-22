let events = require('events');

let myEmit = new events.EventEmitter();
myEmit.on('some_event', function(text) {
    console.log(text);
});

myEmit.emit('some_event', 'TEXT_TEXT_TEXT_TEXT');