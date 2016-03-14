import Queue from '../../src/stack-queue/queue'

describe('Queue', function(){
    var input = {
        first: new Queue().enqueue('a1').enqueue('a2')
    };

    it('should be defined with size 2', function(){
        expect(input.first).to.be.ok;
        expect(input.first.size()).to.equal(2);
    });
    it('should dequeue elements', function(){
        expect(input.first.dequeue()).to.equal('a1');
        expect(input.first.size()).to.equal(1);
        expect(input.first.dequeue()).to.equal('a2');
        expect(input.first.size()).to.equal(0);
    });
    it('should enqueue elements', function(){
        expect(input.first.size()).to.equal(0);
        expect(input.first.enqueue('a3').enqueue('a4').size()).to.equal(2);
        expect(input.first.dequeue()).to.equal('a3');
        expect(input.first.size()).to.equal(1);
        expect(input.first.dequeue()).to.equal('a4');
        expect(input.first.size()).to.equal(0);
    });
});