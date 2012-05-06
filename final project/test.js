var parser = require('./parser.js');
var interpreter = require('./interpreter.js');

var testcases = [ "a <- 010010011010",
                  " b <- 0101001 ",
                  "c<-b",
                  "! <- { [1] -> 0, [0] -> 1}",
                  "c <- ! c",
                  "& <- { [1] [1] -> 1, [_] [_] -> 0}",
                  "a <- a & b",
                  "a <- a /& b",
                  "a <- & a b",
                  "3*true <- { [_] [_] [_] -> 1}",
                  "c <- 3*true a a b",
                  "a <- a /and b",
                  "a <- and a b"];

var n = testcases.length;
var temp;
for(var i=0; i<n; i++){      
  console.log();
  temp = parser.parse(testcases[i]);
  temp = interpreter.interpret(temp);
  console.log(temp);
}