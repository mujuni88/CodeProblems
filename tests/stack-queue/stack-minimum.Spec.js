import StackMinimum from '../../src/stack-queue/stack-minimum'

describe('StackMinimum', function(){
    var input = new StackMinimum().push(10).push(3).push(1).push(4);

    it('should be defined with size 2', function(){
        expect(input).to.be.ok;
        expect(input.size()).to.equal(4);
    });
    it('should return correct min value', function(){
        expect(input.pop()).to.equal(4);
        expect(input.minimum()).to.equal(1);
        expect(input.pop()).to.equal(1);
        expect(input.minimum()).to.equal(3);
        expect(input.pop()).to.equal(3);
        expect(input.minimum()).to.equal(10);
        expect(input.pop()).to.equal(10);
        expect(input.pop()).to.not.be.ok;
        expect(input.minimum()).to.equal(Infinity);

    });
});