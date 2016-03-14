function isUniqueMap(str){
    if(typeof str !== 'string'){
        throw new Error('type of string only');
    }

    if(str.length === 1){
        return true;
    }

    var map = {}, char;
    for(var i = 0; i < str.length; i++){
        char = str[i];

        if(map[char]){ return false;}

        map[char] = true;
    }

    return true;
}

function isUniqueAscii(str){
    if(typeof str !== 'string'){
        throw new Error('type of string only');
    }

    if(str.length === 1){
        return true;
    }

    var ascii = new Array(128), code;
    for(var i = 0; i < str.length; i++){
        code = str.charCodeAt(i);

        if(ascii[code]){ return false;}

        ascii[code] = true;
    }

    return true;
}

function isUniqueBit(str){
    if(typeof str !== 'string'){
        throw new Error('type of string only');
    }

    if(str.length === 1){
        return true;
    }

    var bits = 0, code;
    for(var i = 0; i < str.length; i++){
        code = str.charCodeAt(i) - 97;
        if ((bits & (1<<code)) > 0) {return false;}

        bits |= 1 << code;

    }

    return true;
}

export {isUniqueAscii, isUniqueBit, isUniqueMap};