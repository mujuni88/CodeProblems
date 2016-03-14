function rotateRt(arr){
        if(!arr){
        throw new Error('Invalid param');
    }
    
    transpose(arr);
    rotateRight(arr);
    return arr;
}

function rotateLt(arr){
        if(!arr){
        throw new Error('Invalid param');
    }

    transpose(arr);
    rotateLeft(arr);
    return arr;
}

function transpose(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    return arr;
}

function rotateRight(arr){
    // read backwards
    for(let r = 0; r < arr.length; r++){
        swap(arr[r]);
    }
    
    return arr;
}

function rotateLeft(arr){
    let temp;
    
    for(let r = 0; r < arr.length/2; r++){
        for(let c = 0; c < arr[r].length; c++){
            temp = arr[r][c];
            arr[r][c] = arr[arr.length - 1 - r][c];
            arr[arr.length - 1 - r][c] = temp;
        }
    }
    return arr;
}
function swap(arr){
    let temp, tail = arr.length - 1;
    for(let i = 0; i < tail; i++){
        temp = arr[i];
        arr[i] = arr[tail];
        arr[tail--] = temp;
    }
}

function rotate(matrix){
        let temp, last;
    for(let l = 0; l < matrix.length/2; l++){
        last = matrix.length - 1 - l;
        for(let c = l; c < last; c++){
            temp = matrix[l][c];
            
            matrix[l][c] = matrix[matrix.length - 1 - c][l];
            matrix[matrix.length - 1 - c][l] = matrix[last][matrix.length - 1 - c];
            matrix[last][matrix.length - 1 - c] = matrix[c][last];
            matrix[c][last] = temp;
        }
    }
    
    return matrix;
}

function rotateL(matrix){
        let top, left, bottom, right, last;
    for(let l = 0; l < matrix.length/2; l++){
        last = matrix.length - 1 - l;
        for(let c = l; c < last; c++){
            // top first
            top = matrix[matrix.length - 1 - c][l];
            left = matrix[c][last];
            bottom = matrix[last][c];
            right = matrix[matrix.length - 1 - c][last];

            // left = top
            matrix[c][last] = top;
            
            // top = right
            matrix[matrix.length - 1 - c][l] = right;
            
            // right = bottom 
            matrix[matrix.length - 1 - c][last] = bottom;
            
            // bottom = left
            matrix[last][c] = left;
            
        }
    }
    
    return matrix;
}

export {rotate, rotateL, rotateLeft, rotateLt, rotateRight, rotateRt, transpose};
