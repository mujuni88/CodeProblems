import SetOfStacks from '../../src/stack-queue/stack-sets'

xdescribe('SetOfStacks', function(){
    var input = {
        first: new SetOfStacks(1).push('a1').push('a2'),
        sec: new SetOfStacks(2).push('a1').push('a2').push('a3').push('a4').push('a5')
    };

    it('should be defined with size 2', function(){
        expect(input.first).to.be.ok;
        expect(input.first.size()).to.equal(2);
    });
    it('should pop elements', function(){
        expect(input.first.pop()).to.equal('a2');
        expect(input.first.pop()).to.equal('a1');
        expect(input.first.size()).to.equal(1);
    });
    it('should popAt', function(){
        expect(input.sec.limit).to.equal(2);
        expect(input.sec.size()).to.equal(5);
        expect(input.sec.popAt(1)).to.equal('a2');
        expect(input.sec.pop()).to.equal('a5');
        expect(input.sec.size()).to.equal(3);
        expect(input.sec.popAt.call(this,4)).to.not.be.ok;
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