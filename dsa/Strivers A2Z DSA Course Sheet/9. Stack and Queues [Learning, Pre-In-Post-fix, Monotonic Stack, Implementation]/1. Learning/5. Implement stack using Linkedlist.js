class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class stackByLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const poppedVal = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedVal;
    }

    peek() {
        return this.top?.value ?? null;
    }

    isEmpty() {
        return this.top === null;
    }

    getSize() {
        return this.size;
    }

    printStack() {
        let current = this.top;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Stack:", result.join(" -> "));
    }
}

const stack = new stackByLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
console.log("Top Element:", stack.peek());
console.log("Popped:", stack.pop());
stack.printStack();
console.log("Is Empty:", stack.isEmpty());
console.log("Stack Size:", stack.getSize());  