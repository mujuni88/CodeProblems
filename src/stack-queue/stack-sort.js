import {Stack2 as Stack} from './stack';


function StackSort() {
    this.sortedStack = new Stack();
    this.tempStack = new Stack();
}
StackSort.prototype.push = function (data) {
    if (this.sortedStack.isEmpty()) {
        this.sortedStack.push(data);
        return this;
    }

    var topVal = this.sortedStack.peek();
    while (!this.sortedStack.isEmpty() && data < topVal) {
        this.tempStack.push(this.sortedStack.pop());
        topVal = this.sortedStack.peek();
    }

    this.sortedStack.push(data);

    shiftStack.call(this);

    return this;
}
StackSort.prototype.pop = function () {
    if (this.sortedStack.isEmpty()) {
        return null;
    }

    return this.sortedStack.pop();
};
StackSort.prototype.size = function () {
    return this.sortedStack.size() + this.tempStack.size();
}

StackSort.sort = function (stack) {
    var sorted = new Stack(), temp;

    while (!stack.isEmpty()) {
        temp = stack.pop();
        while (!sorted.isEmpty() && sorted.peek() > temp) {
            stack.push(sorted.pop());
        }

        sorted.push(temp);
    }

    return sorted;
}

function shiftStack() {
    while (!this.tempStack.isEmpty()) {
        this.sortedStack.push(this.tempStack.pop());
    }
}

export default StackSort;