var parser = require('./implies.js');

console.log(parser.parse("a<-{[1]->0}"));
console.log(parser.parse("b<-0101001"));
console.log(parser.parse("c<-{10[_]1->1}"));