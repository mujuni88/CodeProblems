import {LinkedList2} from '../linked-list/linked-list';

function Animal(name){
    this.name = name;
    this.order = 0;
}
Animal.prototype.setOrder = function(order){
    this.order = order;    
}
Animal.prototype.isOlder = function(a){
    if(!a instanceof Animal){
        throw new Error('Animal required');
    }
    
    if(this.order < a.order){
        return true;
    }
}

function Dog(name){
    this.type = 'dog';
    Animal.call(this, name);
}
extend(Dog, Animal);

function Cat(name){
    this.type = 'cat';
    Animal.call(this, name);
}
extend(Cat, Animal);

function extend(c, ab){
    c.prototype = Object.create(ab.prototype);
    c.prototype.constructor = c;
}

function AnimalQueue(){
    this.cats = new LinkedList2();
    this.dogs = new LinkedList2();
    this.order = 0;
}
AnimalQueue.prototype.enqueue = function(a){
    if(!a instanceof Animal){
        throw new Error('Animal required');
    }
    
    a.setOrder(this.order++);
    
    if(a instanceof Cat) {
        this.cats.add(a);
    } else{
        this.dogs.add(a);
    }
    
    return this;
}
AnimalQueue.prototype.dequeueAny = function(){
    if(!this.dogs.size()){
        return this.cats.remove();
    }
    
    if(!this.cats.size()){
        return this.dogs.remove();
    }
    
    var cat = this.cats.peek();
    var dog = this.dogs.peek();
    
    if(cat.isOlder(dog)){
        return this.cats.remove();
    } else{
        return this.dogs.remove();
    }
    
    return null;
}
AnimalQueue.prototype.dequeueDog = function(){
    return this.dogs.remove();
}
AnimalQueue.prototype.dequeueCat = function(){
    return this.cats.remove();
}
AnimalQueue.prototype.size = function(){
    return this.cats.size() + this.dogs.size();
}
function makeAnimal(type, name){

    return (type === 'dog') ? new Dog(name) : new Cat(name);
}

export {makeAnimal, Animal, AnimalQueue};