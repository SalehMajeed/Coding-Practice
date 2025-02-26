
const MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

MinStack.prototype.push = function (val) {
    if (this.min >= val) {
        this.stack.push(this.min);
        this.min = this.min > val ? val : this.min;
    }
    this.stack.push(val);
};

MinStack.prototype.pop = function () {
    if (this.stack.pop() === this.min) {
        this.min = this.stack.pop();
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function () {
    return this.min;
};


const minStack = new MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(3);
minStack.push(4);
minStack.push(8);
minStack.push(1);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();