let module_func = function() {
    console.log('Heey, you did it!')
};
let multiply = function(x, y) {
    console.log(`${x} * ${y} = ${x*y}`);
};

module.exports = {
    module_func: module_func,
    multiply: multiply,
};