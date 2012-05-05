start =
  assignnumber
/ assignrule  
  
assignnumber = 
  v:variable leftarrow n:number ws*
  { return {variable:v, number:n}; }

assignrule = 
  v:variable leftarrow e:rulelist ws*
  { return {variable:v, expression:e}; }
  
variable = 
  ws* letters:[a-zA-Z]+
  { return letters.join(''); }

number = 
  ws* digits:digit+
  { return digits.join(''); } 

rulelist = 
  beginlist r:rule endlist
  { return r; } 

rule = 
  pat:pattern rightarrow res:bit
  { pat.result = res; return pat; } 

pattern = 
  ws* l:trigit* '[' c:trigit ']' r:trigit*
  { return {left:l.join(''), center:c, right:r.join('')}; }

// Language keywords  
bit = ws* d:digit {return d;}
beginlist = ws* '{'
endlist = ws* '}'
leftarrow = ws* '<-'
rightarrow = ws* '->'

// Basic classes
ws = [ \t\r\n\v\f]
trigit = [01_]
digit = [01]