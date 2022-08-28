// linked list
// Singly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLikedList {
  constructor() {
    this.head = null; // Node
    this.tail = null; // Node
  }

  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);

    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let preNode = this.head;
    while (preNode.next.value !== value) {
      preNode = preNode.next;
    }

    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let curNode = this.head;
    let displayString = "[";

    while (curNode !== null) {
      displayString += `${curNode.value}, `;
      curNode = curNode.next;
    }
    displayString = displayString
      .substring(0, displayString.length - 2);
    displayString += "]";

    console.log(displayString)
  }

}


const linkedList = new SinglyLikedList();
console.log(linkedList);

linkedList.append(6);
console.log(linkedList);

linkedList.append(5);
console.log(linkedList);

linkedList.append(3);
console.log(linkedList);


