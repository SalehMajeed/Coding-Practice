class Queue {
    constructor(size) {
      this.size = size;
      this.front = -1;
      this.rear = -1;
      this.arr = [];
      this.currentSize = 0;
    }
  
    enqueue(element) {
      if (this.currentSize >= this.size) {
        throw Error("Queue overflowed");
      }
      if (this.rear === -1) {
        this.front = 0;
        this.rear = 0;
      }
      this.arr[this.rear++] = element;
      this.currentSize++;
    }
    dequeue() {
      if (this.front === -1 || this.currentSize === 0) {
        throw Error("Queue is empty");
      }
  
      this.front, this.arr[this.front++];
      this.currentSize--;
    }
    peek() {
      if (this.front === this.rear || this.front === -1) {
        throw Error("Queue is empty");
      }
      return this.arr[this.front];
    }
  }
  
  const queue = new Queue(3);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue();
  queue.dequeue();
  // queue.dequeue();
  console.log(queue.peek());
  