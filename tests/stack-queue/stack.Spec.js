import {Stack2 as Stack} from '../../src/stack-queue/stack'

describe('Stack', function(){
    var input = {
        first: new Stack().push('a1').push('a2')
    };

    it('should be defined with size 2', function(){
        expect(input.first).to.be.ok;
        expect(input.first.size()).to.equal(2);
    });
    it('should pop elements', function(){
        expect(input.first.pop()).to.equal('a2');
        expect(input.first.size()).to.equal(1);
        expect(input.first.pop()).to.equal('a1');
        expect(input.first.size()).to.equal(0);
    });
    it('should push elements', function(){
        expect(input.first.size()).to.equal(0);
        expect(input.first.push('a3').push('a4').size()).to.equal(2);
        expect(input.first.pop()).to.equal('a4');
        expect(input.first.size()).to.equal(1);
        expect(input.first.pop()).to.equal('a3');
        expect(input.first.size()).to.equal(0);
    });
});