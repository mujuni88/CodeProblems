import DoublyLinkedList from '../../src/linked-list/doubly-linked-list';

describe('DoublyLinkedList', function(){
    var input = {
        first: new DoublyLinkedList().add('a1').add('a2').add('a3').add('a4')
    }

    it('should be defined', function(){
        expect(input.first).to.be.ok;
        expect(input.first.length).to.equal(4);
    });
    it('should add data', function(){
        expect(input.first.head.data).to.equal('a1');
        expect(input.first.head.next.data).to.equal('a2');
        expect(input.first.head.next.prev.data).to.equal('a1');
        expect(input.first.head.next.next.data).to.equal('a3');
        expect(input.first.head.next.next.prev.data).to.equal('a2');
    });
    it('should search data', function(){
        expect(input.first.length).to.equal(4);
        var a3 = input.first.searchNodeAt(3);
        expect(a3.data).to.equal('a3');
        expect(a3.prev.data).to.equal('a2');
        var a1 = input.first.searchNodeAt(1);
        expect(a1.data).to.equal('a1');
        expect(a1.prev).to.not.be.ok;
        expect(input.first.length).to.equal(4);
    });
    it('should remove elements', function(){
        expect(input.first.length).to.equal(4);
        var a3 = input.first.removeAt(3);
        expect(a3.data).to.equal('a3');
        expect(a3.prev.data).to.equal('a2');
        expect(input.first.length).to.equal(3);
        var a1 = input.first.removeAt(1);
        expect(a1.data).to.equal('a1');
        expect(a1.prev).to.not.be.ok;

        expect(input.first.length).to.equal(2);
    });
});