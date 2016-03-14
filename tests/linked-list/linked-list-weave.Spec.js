import weave from '../../src/linked-list/linked-list-weave';
import {LinkedList2 as LinkedList} from '../../src/linked-list/linked-list';

describe('LinkedList weave', function(){

    var input;

    beforeEach(function(done){
        input = {
            first: new LinkedList().add('a1').add('a2').add('a3').add('b1').add('b2').add('b3'),
            second: new LinkedList().add('a1').add('a2').add('b1'),
            third: new LinkedList().add('a1').add('b1'),
            fourth: new LinkedList().add('a1'),
            ffth: new LinkedList()
        };
        
        done();
    });
    
    it('should throw error', function(){
        expect(weave.bind(null,[])).to.throw('Invalid');
        expect(weave.bind(null,1)).to.throw('Invalid');
    });
    it('should report true', function(){
        var out = weave(input.first);
        
        expect(out.data).to.equal('a1');
        expect(out.next.data).to.equal('b1');
        expect(out.next.next.data).to.equal('a2');
        expect(out.next.next.next.data).to.equal('b2');
        expect(out.next.next.next.next.data).to.equal('a3');
        expect(out.next.next.next.next.next.data).to.equal('b3');

        out = weave(input.second);
        expect(out.data).to.equal('a1');
        expect(out.next.data).to.equal('b1');
        expect(out.next.next.data).to.equal('a2'); 
        expect(out.next.next.next).to.not.be.ok;

        out = weave(input.third);
        expect(out.data).to.equal('a1');
        expect(out.next.data).to.equal('b1');
        expect(out.next.next).to.not.be.ok;
    });
    it('should report false', function(){
        
        var out = weave(input.first);
        expect(out.data).to.not.equal('b1');
        expect(out.next.data).to.not.equal('a1');
        expect(out.next.next.data).to.not.equal('b2');
        expect(out.next.next.next.data).to.not.equal('a2');
        expect(out.next.next.next.next.data).to.not.equal('b3');
        expect(out.next.next.next.next.next.data).to.not.equal('a3');

        out = weave(input.second);
        expect(out.data).to.not.equal('b1');
        expect(out.next.data).to.not.equal('a1');
        expect(out.next.next.data).to.not.equal('b2');
        expect(out.next.next.next).to.not.equal('a2');

        out = weave(input.third);
        expect(out.data).to.not.equal('b1');
        expect(out.next.data).to.not.equal('a1');
        expect(out.next.next).to.not.ok;
    });
});