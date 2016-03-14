import {reverseLL, reverseRec} from '../../src/linked-list/linked-list-reverse';
import {LinkedList, LinkedList2} from '../../src/linked-list/linked-list';

describe('LinkedList Reverse', function(){
    var input = {
        first: new LinkedList().push('a1').push('a2').push('a3').push('b1').push('b2').push('b3'),
    };

    it('should be defined', function(){
        expect(input.first).to.be.ok;
    });
    it('should report true', function(){
        var out = reverseLL(input.first.head);
        expect(out.data).to.equal('b3');
        expect(out.next.data).to.equal('b2');
        expect(out.next.next.data).to.equal('b1');
        expect(out.next.next.next.data).to.equal('a3');
        expect(out.next.next.next.next.data).to.equal('a2');
        expect(out.next.next.next.next.next.data).to.equal('a1');
    });
    it('should report false', function(){
        input = {
            first: new LinkedList().push('a1').push('a2').push('a3').push('b1').push('b2').push('b3'),
        };
        
        var out = reverseLL(input.first.head);
        expect(out.data).to.not.equal('a1');
        expect(out.next.data).to.not.equal('b1');
        expect(out.next.next.data).to.not.equal('a2');
        expect(out.next.next.next.data).to.not.equal('b2');
        expect(out.next.next.next.next.data).to.not.equal('a3');
        expect(out.next.next.next.next.next.data).to.not.equal('b3');
    });
    it('should throw an error', function(){
        expect(reverseLL.bind(null, null)).to.throw('TypeError');
    });
});