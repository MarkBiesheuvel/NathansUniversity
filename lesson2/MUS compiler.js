var compile = function (musexpr) {
    var result = [];
    helper(0, result, musexpr);
    return result;
};

/*
This helper function does two things at a time
   - it appends the NOTE bytecode to the end of result
   - it returns the ending time
*/
var helper = function (time, result, expr) {
    switch(expr.tag){
    
      case 'seq':
        //Take endtime as new start time
        time = helper(time, result, expr.left);
        return helper(time, result, expr.right);
        
      case 'par':
        var t0 = helper(time, result, expr.left);
        var t1 = helper(time, result, expr.right);
        // Take maximum of two parrelel pieces
        return Math.max(t0, t1);  
        
      case 'rest':
        return time + expr.dur;
        
      case 'note':
        expr.start = time;
        expr.pitch = convertPitch(expr.pitch);
        result.push(expr);
        return time + expr.dur;
      
      default:
        return time;
    }
};

var letterPitches = { c: 12, d: 14, e: 18, f: 17, g: 19, a: 21, b: 23 };

var convertPitch = function(pitch) {
    return letterPitches[pitch[0]] +
           12 * parseInt(pitch[1]);
}

module.exports = compile; 