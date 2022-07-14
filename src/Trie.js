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
        this.#traverseToMap(this.root, map);
        return map;
    }

    getTrieAsMatrix(){
        let matrix = [];
        this.#traverseToMatrix(this.root, matrix, 0);
        return matrix;
    }

    #traverseToMatrix(node, matrix, row){
        matrix[row] ??= [];
        matrix[row].push({
            isFinishedWord: node.isFinishedWord,
            value: node.value,
        });
        node.children.forEach(child => this.#traverseToMatrix(child, matrix, row + 1));
    }

    #traverseToMap(node, map) {
        map[node.value] = {
            isFinishedWord: node.isFinishedWord,
            value: node.value,
        };
        node.children.forEach(child => this.#traverseToMap(child, map[node.value]));
    }
    
}