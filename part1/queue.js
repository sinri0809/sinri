// 배열 크기가 무한정 늘어날 수 있는 단점 있음.

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    // delete - removes a property from an *object 
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  display() {
    console.log("queue size: " + this.size())

    console.log("front: " + this.front)
    this.queue.forEach((item) => {
      if(item){
        console.log(item)
      }
    })
    console.log("rear: " + this.rear)
  }
}

function main_queue() {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(4);
  q.enqueue(5);
  q.dequeue();

  q.display();
}
