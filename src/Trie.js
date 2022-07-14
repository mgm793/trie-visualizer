class TrieNode {
    constructor(value, isFinishedWord = false) {
        this.value = value;
        this.children = [];
        this.isFinishedWord = isFinishedWord;
    }
}


export class Trie {
    constructor() {
        this.root = new TrieNode('');
    }

    insert(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            let child = currentNode.children.find(child => child.value === letter);
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
            let child = currentNode.children.find(child => child.value === letter);
            if (!child) {
                return false;
            }
            currentNode = child;
        }
        return currentNode.isFinishedWord;
    }

    getTrieAsMap() {
        let map = {};
        this.traverse(this.root, map);
        return map;
    } 

    traverse(node, map) {
        map[node.value] = {
            isFinishedWord: node.isFinishedWord,
            value: node.value,
        };
        node.children.forEach(child => this.traverse(child, map[node.value]));
    }
    
}