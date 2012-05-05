start =
  assignnumber
/ assignrule  
/ applyrule
  
assignnumber = 
  v:variable leftarrow n:number ws*
  { return {variable:v, number:n}; }

assignrule = 
  o:operator leftarrow r:rulelist ws*
  { return {operator:o, rules:r}; }

applyrule = 
  v:variable leftarrow e:expression
  { return {variable:v, expression:e}; }
  
expression = 
  infix
/ prefix
/ variable

infix = 
  v:variable o:operator w:variable
  { return {operator:o, variables:[v,w]}; }
  
prefix = 
  o:operator v:variable+
  { return {operator:o, variables:v}; }

operator = 
  ws* c:chars+
  { return c.join(''); }

variable = 
  ws* l:letter+
  { return l.join(''); }

number = 
  ws* d:digit+
  { return d.join(''); } 

rulelist = 
  beginlist r:rule cr:commarule* endlist
  { return [r].concat(cr); } 

commarule = 
  comma r:rule
  { return r;}
  
rule = 
  p:pattern+ rightarrow r:bit
  { return { patterns:p, result:r }; }

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