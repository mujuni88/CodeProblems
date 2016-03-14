function matrixZero(matrix){
        if(!matrix || !matrix.length){
        throw new Error('Invalid');
    }
    if(Object.prototype.toString.call(matrix).slice(8,-1) !== 'Array'){
        throw new Error('Invalid');
    }
    
    var hasZero = false;
    for(var r = 0; r < matrix.length; r++){
        for(var c = 0; c < matrix[r].length; c++){
            if(matrix[r][c] === 0){
                hasZero = true;
                for(var i = 0; i < matrix[r].length; i++){
                    matrix[r][i] = 0;
                    
                }
                for(i = 0; i < matrix.length; i++){
                    matrix[i][c] = 0;
                }
            }
        }
    }
    
    return hasZero? matrix: hasZero;
}

export default matrixZero;