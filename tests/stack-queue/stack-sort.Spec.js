import StackSort from '../../src/stack-queue/stack-sort'
import {Stack2 as Stack} from '../../src/stack-queue/stack'


describe('StackSort', function(){
    var input, nums = [1,5,3,4,6,20,10,9], sNums;
    
    beforeEach(function(done){
        input = new Stack();
        nums.forEach(function(item){
            input.push(item);
        });
        
        input = StackSort.sort(input);
        sNums = nums.sort(function(a,b){return a - b;});

        done();
    });
    it('should be defined with size 2', function(){
        expect(input).to.be.ok;
        expect(input.size()).to.equal(nums.length);
    });
    it('should pop elements', function(){
        expect(input.pop()).to.equal(sNums.pop());
        expect(input.size()).to.equal(sNums.length);
        expect(input.pop()).to.equal(sNums.pop());
        expect(input.size()).to.equal(sNums.length);
    });
    it('should push elements', function(){
        expect(input.size()).to.equal(sNums.length);
        sNums.push(2);
        sNums.push(11);
        sNums.sort(function(a,b){return a - b});
        expect(input.push(2).push(11).size()).to.equal(sNums.length);
        
        input = StackSort.sort(input);
        
        expect(input.pop()).to.equal(sNums.pop());
        expect(input.size()).to.equal(sNums.length);
        expect(input.pop()).to.equal(sNums.pop());
        expect(input.size()).to.equal(sNums.length);
    });
});