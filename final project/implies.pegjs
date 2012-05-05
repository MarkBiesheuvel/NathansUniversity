start =
  expression
  
expression = 
  name:variable leftarrow expr:rulelist                   { return [name, expr]; }
/ name:variable leftarrow num:number                      { return [name, num]; }

variable = letters:[a-zA-Z]+                              { return letters.join(''); }

number = digits:digit+                                    { return digits.join(''); } 

rulelist = '{' r:rule '}'                                 { return r; } 

rule = pat:pattern rightarrow res:digit                   { pat.result = res; return pat; } 

pattern = l:digitplus* '[' c:digitplus ']' r:digitplus*   { return {left:l, center:c, right:r}; }

digitplus = 
  d:digit                                                 { return d; }
/ d:'_'                                                   { return d; }

digit = [01]

leftarrow = '<-'
rightarrow = '->'