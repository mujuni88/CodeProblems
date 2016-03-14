import matrixZero from '../../src/array-strings/matrix-zero-col-row'

xdescribe('Matrix Zero', function(){
    var input = {
        first: [
            [1, 2, 0, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ],
        second: [
            [1, 0, 3, 4],
            [5, 6, 7, 0],
            [13, 14, 15, 16]
        ],
        third:[
            [1,2],
            [0,0]
        ],
        fourth:[
            [1,1,2],
            [1,2,3],
            [1,2,3]
        ]
    };
    var output = {
        first:[
            [0, 0, 0, 0],
            [5, 6, 0, 8],
            [9, 10, 0, 12],
            [13, 14, 0, 16]
        ],
        second: [
            [1, 2, 3, 0],
            [0, 0, 0, 0],
            [13, 14, 15, 0]
        ],
        third:[
            [0,2],
            [0,0]
        ],
        fourth:[
            [1,1,2],
            [1,2,3],
            [1,2,3]
        ]
    };


    it('should report false', function(){
        expect(matrixZero(input.fourth)).to.equal(false);
        expect(matrixZero(input.third)).to.deep.equal(output.third);
    });
    it('should report true', function(){
        expect(matrixZero(input.first)).to.deep.equal(output.first);
        expect(matrixZero(input.second)).to.deep.equal(output.second);
    });
    it('should throw error', function(){
        expect(matrixZero.bind(null,[])).to.throw('Invalid');
        expect(matrixZero.bind(null,1)).to.throw('Invalid');
        expect(matrixZero.bind(null,null)).to.throw('Invalid');
        expect(matrixZero.bind(null,'a')).to.throw('Invalid');
    });
});