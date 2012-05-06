var parser = require('./parser.js');

var testcases = [ "a <- 010010011010",
                  " b <- 0101001 ",
                  "c<-b",
                  "! <- { [1] -> 0, [0] -> 1}",
                  "& <- { [1] [1] -> 1, [_] [_] -> 0}",
                  "a <- a & b",
                  "a <- a & b",
                  "b <- & b a",
                  "3*true <- { [_] [_] [_] -> 1}",
                  "c <- 3*true a a b",
                  "a <- a and b",
                  "a <- and a b"];      

var n = testcases.length;
for(var i=0; i<n; i++){      
  console.log();
  console.log(parser.parse(testcases[i]));
}