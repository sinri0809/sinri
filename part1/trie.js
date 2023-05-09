// trie 트라이 
// 트리구조를 기본으로 탐색트리의 일종
// 문자열을 저장/탐색하기 유리한 자료구조 

// 루트는 비어있다. 
// ! 저장/탐색에 유리하지만 저장공간을 차지한다

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char)
        )
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    console.log(`has word: ${word}`)
    return true;
  }

  display() {
    let currentNode = this.root;

    if (currentNode.children.size !== 0) {
      console.log(currentNode.value)

      currentNode.children.forEach((childrenValue, key) => {
        console.log(childrenValue)
      })
    }
  }
}

function main() {
  const wordsTrie = new Trie();

  wordsTrie.insert('hihihi');
  wordsTrie.insert('asd');
  wordsTrie.insert('asdadsas');
  wordsTrie.insert('awerj');
  wordsTrie.insert('2sdadsas');
  wordsTrie.insert('hia');

  wordsTrie.has('hia');
  // console.log(wordsTrie);

  wordsTrie.display();
}

main();