(() => {
  // src/Trie.js
  var TrieNode = class {
    constructor(value, isFinishedWord = false) {
      this.value = value;
      this.children = [];
      this.isFinishedWord = isFinishedWord;
    }
  };
  var Trie = class {
    constructor() {
      this.root = new TrieNode("");
    }
    insert(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        let child = currentNode.children.find((child2) => child2.value === letter);
        if (!child) {
          child = new TrieNode(letter);
          currentNode.children.push(child);
        }
        currentNode = child;
      }
      currentNode.isFinishedWord = true;
    }
    search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        let child = currentNode.children.find((child2) => child2.value === letter);
        if (!child) {
          return false;
        }
        currentNode = child;
      }
      return currentNode.isFinishedWord;
    }
    print() {
      let currentNode = this.root;
      let queue = [currentNode];
      while (queue.length) {
        let node = queue.shift();
        console.log(node.value);
        node.children.forEach((child) => queue.push(child));
      }
    }
  };

  // src/index.js
  (() => {
    const trie = new Trie();
    trie.insert("hello");
    trie.print();
  })();
})();
