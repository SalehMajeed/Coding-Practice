
var MyStack = function() {
    this.q = [];
};

MyStack.prototype.push = function(x) {
    return this.q.unshift(x);
};

MyStack.prototype.pop = function() {
    return this.q.shift();
};

MyStack.prototype.top = function() {
    return this.q[0]
};

MyStack.prototype.empty = function() {
    return this.q.length === 0;    
};