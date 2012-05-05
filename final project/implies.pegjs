start =
  assignnumber
/ assignrule  
  
assignnumber = 
  v:variable leftarrow n:number ws*
  { return {variable:v, number:n}; }

assignrule = 
  o:operator leftarrow r:rulelist ws*
  { return {operator:o, rules:r}; }
  
operator = 
  ws* chars:chars+
  { return chars.join(''); }

variable = 
  ws* letters:letter+
  { return letters.join(''); }

number = 
  ws* digits:digit+
  { return digits.join(''); } 

rulelist = 
  beginlist r:rule cr:commarule* endlist
  { return [r].concat(cr); } 

commarule = 
  comma r:rule
  { return r;}
  
rule = 
  pat:pattern rightarrow res:bit
  { pat.result = res; return pat; } 

pattern = 
  ws* l:trigit* '[' c:trigit ']' r:trigit*
  { return {left:l.join(''), center:c, right:r.join('')}; }

// Language keywords  
bit = ws* b:digit {return b;}
beginlist = ws* '{'
endlist = ws* '}'
leftarrow = ws* '<-'
rightarrow = ws* '->'
comma = ws* ','

// Basic classes
ws = [ \t\r\n\v\f]
letter = [a-zA-Z]
chars = [\x21-\x7E]
trigit = [01_]
digit = [01]