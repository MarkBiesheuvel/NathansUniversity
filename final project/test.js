var parser = require('./implies.js');

console.log();
console.log(parser.parse(" a <- { [1] -> 0 }"));
console.log();
console.log(parser.parse(" b <- 0101001 "));
console.log();
console.log(parser.parse(" $ <- { 10[_]1 -> 1}  "));
console.log();
console.log(parser.parse("! <- { [1] -> 0, [0] -> 1}"));
