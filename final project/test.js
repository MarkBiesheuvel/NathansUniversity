var parser = require('./implies.js');

console.log();
console.log(parser.parse("a <- 010010011010"));
console.log();
console.log(parser.parse(" b <- 0101001 "));
console.log();
console.log(parser.parse("! <- { [1] -> 0, [0] -> 1}"));
console.log();
console.log(parser.parse("& <- { [1] [1] -> 1, [_] [_] -> 0}"));