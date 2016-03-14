'use strict';
import {isUniqueMap, isUniqueAscii,isUniqueBit} from '../../src/array-strings/unique-string';

xdescribe('isUniqueMap function', function(){
    it('should be unique', function(){
        expect(isUniqueMap('abcd')).to.equal(true);
    });
    it('should not be uique', function(){

        expect(isUniqueMap('aaaa')).to.equal(false);
    });
    it('should be unique with a single character', function(){
        expect(isUniqueMap('abe')).to.be.equal(true);
    });
    it('should throw an error for none strings', function(){
        expect(isUniqueMap.bind(null, 1)).to.throw('type of string only');
    });
});

xdescribe('isUniqueAscii function', function(){
    it('should be unique', function(){
        expect(isUniqueAscii('123(abd)')).to.equal(true);
    });
    it('should not be uique', function(){

        expect(isUniqueAscii('111')).to.equal(false);
    });
    it('should be unique with a single character', function(){
        expect(isUniqueAscii('()><')).to.be.equal(true);
    });
    it('should throw an error for none strings', function(){
        expect(isUniqueAscii.bind(null, 1)).to.throw('type of string only');
    });
});

xdescribe('isUniqueBit function', function(){
    it('should be unique', function(){
        expect(isUniqueBit('bacdez')).to.equal(true);
    });
    it('should not be uique', function(){

        expect(isUniqueBit('ajkk')).to.equal(false);
    });
    it('should be unique with a single character', function(){
        expect(isUniqueBit('c')).to.be.equal(true);
    });
    it('should throw an error for none strings', function(){
        expect(isUniqueBit.bind(null, 1)).to.throw('type of string only');
    });
});