function module_func() {
    console.log('Heey, you did it!')
}

function multiply(x, y) {
    console.log(`${x} * ${y} = ${x*y}`);
}
module.exports.module_func = module_func;
module.exports.multiply = multiply;