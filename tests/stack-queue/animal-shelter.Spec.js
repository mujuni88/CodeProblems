import {makeAnimal, AnimalQueue} from '../../src/stack-queue/animal-shelter'

describe('AnimalShelter', function(){
    
    var dogs = [
        {type:'dog', name:'Dog1'},
        {type:'dog', name:'Dog2'},
        {type:'dog', name:'Dog3'}
    ];
    var cats = [
        {type:'cat', name:'Cat1'},
        {type:'cat', name:'Cat2'},
        {type:'cat', name:'Cat3'}
    ],input;
    
    beforeEach(function(){
        input = new AnimalQueue();
    });

    it('should be defined with size 2', function(){
        expect(input).to.be.ok;
        expect(input.size()).to.equal(0);
    });
    it('should dequeue elements', function(){
        dogs.forEach(function(d){
            input.enqueue(makeAnimal(d.type, d.name));
        });

        expect(input.size()).to.equal(3);
        expect(input.dequeueAny().data.name).to.equal('Dog1');
        expect(input.size()).to.equal(2);
        expect(input.dequeueAny().data.name).to.equal('Dog2');
        expect(input.size()).to.equal(1);
    });
    it('should enqueue elements', function(){
        cats.forEach(function(c, i){
            input.enqueue(makeAnimal(c.type, c.name));
            input.enqueue(makeAnimal(dogs[i].type, dogs[i].name));
        });
        expect(input.size()).to.equal(6);
        expect(input.dequeueCat().data.name).to.equal('Cat1');
        expect(input.dequeueDog().data.name).to.equal('Dog1');
        expect(input.size()).to.equal(4);
        expect(input.dequeueCat().data.name).to.equal('Cat2');
        expect(input.dequeueAny().data.name).to.equal('Dog2');
        expect(input.dequeueAny().data.name).to.equal('Cat3');
        expect(input.size()).to.equal(1);
    });
});