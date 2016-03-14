
function removeDups(str){
    if(!str){
        throw new Error('Invalid input');
    }
    
    let checker = 0, output = '', code;
    for(let i = 0; i < str.length; i++){
        code = str.charCodeAt(i) - 97;
        
        if(code < 0 || code > 25){
            throw new Error('Invalid input');
        }
        
        
        if((checker & 1 << code) === 0){
            output += str[i];
        }
        
        checker |= (1 << code);
    }
    
    return output;  
}

export default removeDups;