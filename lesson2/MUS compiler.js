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
    if(expr.tag=='seq'){
        //Take endtime as new start time
        time = helper(time, result, expr.left);
        return helper(time, result, expr.right);
        
    }else if(expr.tag=='par'){
        var t0 = helper(time, result, expr.left);
        var t1 = helper(time, result, expr.right);
        // Take maximum of two parrelel pieces
        return Math.max(t0, t1);  
        
    }else if(expr.tag=='rest'){
        return time + expr.dur;
        
    }else {
        expr.start = time;
        result.push(expr);
        return time + expr.dur;
    }
};