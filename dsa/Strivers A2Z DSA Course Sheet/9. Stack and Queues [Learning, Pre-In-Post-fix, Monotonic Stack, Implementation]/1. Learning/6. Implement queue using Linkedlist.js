class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class QueueUsingLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        let dequeueVal = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
        return dequeueVal;
    }

    peek() {
        return this.front?.value ?? null;
    }

    isEmpty() {
        return this.front === null;
    }

    getSize() {
        return this.size
    }

    printQueue() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Queue:", result.join(" -> "));
    }
}

const queue = new QueueUsingLinkedList();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.printQueue();
console.log("Front Element:", queue.peek());
console.log("Dequeued:", queue.dequeue());
queue.printQueue();
console.log("Is Empty:", queue.isEmpty());
console.log("Queue Size:", queue.getSize());  
