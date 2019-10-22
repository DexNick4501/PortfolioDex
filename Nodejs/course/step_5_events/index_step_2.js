let events = require('events');
let util = require('util');

let Cars = function(model) {
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

let bmw = new Cars('BMW');
let audi = new Cars('Audi');
let volvo = new Cars('Volvo');
let cars = [bmw, audi, volvo];

cars.forEach(function(car) {
    car.on('speed', function(speed) {
        console.log(`${car.model} развивает скорость до: ${speed}`);
    });
});

bmw.emit('speed', '244.3 km/h');
audi.emit('speed', '211.9 km/h');
volvo.emit('speed', '189.6 km/h');