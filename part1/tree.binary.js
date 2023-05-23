// Binary tree 이진 트리 

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor () {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // ? 순회의 기준 - 루트
  // 전위 순회 -/좌/우
  displayPreorder(node) {
    if(node !== null) {
      console.log(node.value);
      this.displayPreorder(node.left);
      this.displayPreorder(node.right);
    }
  }

  // 중위 순회 좌/-/우
  displayInorder(node) {
    if(node !== null) {
      this.displayInorder(node.left);
      console.log(node.value);
      this.displayInorder(node.right);
    }
  }

  // 후위 순회 좌/우/-
  displayPostorder(node) {
    if(node !== null) {
      this.displayPostorder(node.left);
      this.displayPostorder(node.right);
      console.log(node.value);
    }
  }

}

function mainTree() {

  const tree = new Tree();

  tree.insert(1);
  tree.insert(3);
  tree.insert(4);

  tree.displayInorder(tree.root);

}

// mainTree();