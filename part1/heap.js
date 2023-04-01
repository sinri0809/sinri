// heap 힙
// 완전이진트리를 기본으로 
// 최대/최소 값을 빠르게 찾아내기 위해 고안된 자료구조
// 부모 노드와 자식 노드사이에 대소관계가 성립

// Max heap 최대 힙
// 부모노드가 자식노드보다 크다
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const swapValue = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = swapValue;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[currentIndex] < this.heap[leftIndex]) {
        const swapValue = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = swapValue;
        currentIndex = leftIndex;
      } else {
        const swapValue = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = swapValue;
        currentIndex = rightIndex;
      }
      leftIndex = currentIndex * 2
      rightIndex = leftIndex + 1
    }

    return returnValue;
  }

  print() {
    console.log(this.heap);
  }
}

function main() {
  const heap = new MaxHeap();
  // [null]
  heap.push(5);
  // 5 -> [null, 5]
  heap.push(6);
  // 6 -> [null, 5, 6] -> [null, 6, 5]
  heap.push(10);
  // 10 -> [null, 6, 5, 10] -> [null, 10, 5, 6]
  heap.push(1);
  // 1 -> [null, 10, 5, 6, 1] -> 
  heap.push(5);
  // 5 -> [null, 10, 5, 6, 1, 5] -> [null, 10, 5, 6, 1, 5]

  heap.pop();
  heap.pop();


  heap.print();
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
      const swapValue = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = swapValue;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]) {
      if (this.heap[currentIndex] > this.heap[leftIndex]) {
        const swapValue = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = swapValue;
        currentIndex = leftIndex;
      } else {
        const swapValue = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = swapValue;
        currentIndex = rightIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = leftIndex + 1;
    }

    return returnValue;
  }

  print() {
    console.log(this.heap)
  }
}

function main2() {
  const heap = new MinHeap();

  heap.push(5);
  heap.push(6);
  heap.push(10);
  heap.push(1);
  heap.push(5);

  console.log(heap.pop())
  console.log(heap.pop())
  console.log(heap.pop())
  console.log(heap.pop())
  heap.print();
}

main2();