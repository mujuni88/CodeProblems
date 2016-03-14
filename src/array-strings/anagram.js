"use strict";

export default function anagram(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        throw new Error('invalid');
    }
    
    if(str1.length < 2 && str2.length < 2){
        return true;
    }
    
    if(str1.length !== str2.length){
        return false;
    }
    
    let total = 0;
    for(let i = 0; i < str1.length; i++){
        total+=str1.charCodeAt(i);
    }
    
    for(let i = 0; i < str2.length; i++){
        total-=str2.charCodeAt(i);
    }
    
    return (total === 0);
}