console.log(sum(2,3) === 5);
console.log(sum(2)(3) === 5);

/*function sum(arg1, arg2){
    return arg1 + arg2;
}

function sum(arg1){
    var arg1 = arg1;
    
    return function(arg2){
        return arg1 + arg2;
    }
}*/

function sum(){
    if(!arguments.length){
        return 0;
    }
    
    if(arguments.length === 1){
        var arg1 = arguments[arguments.length - 1];
        return function(arg2){
            return arg1 + arg2;
        }
    }
    
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        if(!isNaN(arguments[i])){
            total += arguments[i];
        }
    }
    
    return total;
}