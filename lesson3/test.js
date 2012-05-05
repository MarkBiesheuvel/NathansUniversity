var PEG = require('./peg.js');
var assert = require('assert');
var fs = require('fs'); // for loading files

fs.readFile('scheem.peg', 'ascii', function(err, data) {
    // Show the PEG grammar file
    console.log(data);
    // Create my parser
    var parse = PEG.buildParser(data).parse;
    // Do a test
    assert.deepEqual( parse("a"), "a", "Parse atom" );
    assert.deepEqual( parse("  a "), "a", "Parse atom with whitespace" );
    assert.deepEqual( parse(" ( a) "), ["a"], "Parse single atom list with whitespace" );
    assert.deepEqual( parse("(a (b c d))"), ["a", ["b", "c", "d"]], "Parse simple expression" );
    assert.deepEqual( parse("  (  a  b  c ) "), ["a", "b", "c"], "Parse expression with a lot of whitepsaces");
    assert.deepEqual( parse("(a (b c) (c d e))"), ["a", ["b", "c"], ["c", "d", "e"]], "Parse complex expression" );
    assert.deepEqual( parse("(a\t(b c)\r\n(c d e))"), ["a", ["b", "c"], ["c", "d", "e"]], "Parse complex expression with all kind of whitespace" );
    assert.deepEqual( parse("(a\t(b c)\r\n(c d e)) ;; comments start here"), ["a", ["b", "c"], ["c", "d", "e"]], "Parse complex expression with comment" );
    assert.deepEqual( parse("(a;; comment \r\n(b c d))"), ["a", ["b", "c", "d"]], "Parse comment terminated by newline" );
});