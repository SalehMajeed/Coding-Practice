class Stack {
    constructor(size) {
      this.top = -1;
      this.arr = new Array();
      this.size = size;
    }
  
    push(element) {
      if (this.top >= this.size - 1) {
        throw Error("stack overflowed");
      }
      this.arr[++this.top] = element;
      return this.top;
    }
    pop() {
      if (this.top < 0) {
        throw Error("stack already empty");
      }
      return this.arr[this.top--];
    }
    peek() {
      return this.arr[this.top];
    }
    stackSize() {
      return this.top + 1;
    }
  }
  
  const stack = new Stack(3);
  stack.push(31);
  stack.push(12);
  stack.push(45);
  stack.pop();
  stack.pop();
  stack.peek();
  stack.stackSize();
  