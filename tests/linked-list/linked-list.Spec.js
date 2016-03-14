import {LinkedList, LinkedList2} from '../../src/linked-list/linked-list';


describe('LinkedList', function(){
    var input = {
        first: new LinkedList().push('a1').push('a2')
    }

    it('should be defined', function(){
        expect(input.first).to.be.ok;
    });
    it('should contain data', function(){
        expect(input.first.head.data).to.equal('a1');
        expect(input.first.head.next.data).to.equal('a2');
    });
    it('should remove elements', function(){
        expect(input.first.remove).to.be.ok;
        input.first.remove('a1');
        expect(input.first.head.data).to.equal('a2');
        expect(input.first.head.next).to.not.be.ok;
        
        input.first.push('a1');
        expect(input.first.head.next).to.be.ok;
        expect(input.first.head.next.data).to.equal('a1');
    });
});
describe('LinkedList2', function(){
    var input = {
        first: new LinkedList2().add('a1').add('a2').add('a3').add('a4')
    }

    it('should be defined', function(){
        expect(input.first).to.be.ok;
        expect(input.first.length).to.equal(4);
    });
    it('should add data', function(){
        expect(input.first.head.data).to.equal('a1');
        expect(input.first.head.next.data).to.equal('a2');
    });
    it('should search data', function(){
        expect(input.first.length).to.equal(4);
        expect(input.first.removeAt(3).data).to.equal('a3');
        expect(input.first.removeAt(1).data).to.equal('a1');
        expect(input.first.searchNodeAt(4)).to.not.be.ok;
    });
    it('should remove elements', function(){
        expect(input.first.removeAt).to.be.ok;
        expect(input.first.searchNodeAt(1).data).to.equal('a2');
        expect(input.first.removeAt(2).data).to.equal('a4');
        expect(input.first.removeAt(4)).to.not.be.ok;
        
        expect(input.first.length).to.equal(1);
    });
});