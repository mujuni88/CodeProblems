import {rotate, rotateL, rotateLeft, rotateLt, rotateRight, rotateRt, transpose} from '../../src/array-strings/rotate-matrix'

xdescribe('Rotate', function () {
    var arr, out90Left, out90Right, transp;

    beforeEach(function(done){
        arr = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
        out90Left = [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13]
        ];
        out90Right = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ];
        transp = [
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16]
        ];
        
        done();
    });
    it('should transpose 2D matrix', function(){
        expect(transpose(arr)).to.deep.equal(transp);
    });
    it('should rotate 2D matrix 90 right', function () {
        var out = rotateRt(arr);
        expect(out).to.deep.equal(out90Right);
    });
    it('should rotate 2D matrix 90 left', function () {
        var out = rotateLt(arr);
        expect(out).to.deep.equal(out90Left);
    });
    it('should rotate 2D matrix 90 degrees right', function () {
        var out = rotate(arr);
        expect(out).to.deep.equal(out90Right);
    });
    it('should rotate 2D matrix 90 degrees', function () {
        var out = rotateL(arr);
        console.log(out);
        expect(out).to.deep.equal(out90Left);
    });
    it('should throw error ', function () {
        expect(rotateRt.bind(null, null)).to.throw('Invalid param');
        expect(rotateLt.bind(null, null)).to.throw('Invalid param');
    });

});
    