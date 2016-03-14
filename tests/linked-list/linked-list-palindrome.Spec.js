import {isPalindromeLL1} from '../../src/linked-list/linked-list-palindrome';
import {LinkedList, LinkedList2} from '../../src/linked-list/linked-list';

describe('LinkedList Palindrome', function(){
    var input = {
        first: new LinkedList().push('a1').push('a2')
    };
    
    it('should be defined', function(){
        expect(input.first).to.be.ok;
    });
    it('should fail', function(){
        expect(isPalindromeLL1(input.first.head)).to.equal(false);
    });
    it('should pass', function(){
        input.first.remove('a2');
        expect(isPalindromeLL1(input.first.head)).to.equal(true);
        input.first.push('a2').push('a1');
        expect(isPalindromeLL1(input.first.head)).to.equal(true);
    });
    it('should throw an error', function(){
        expect(isPalindromeLL1.bind(null, null)).to.throw('TypeError');
    });
});