export class Visualizer {
    constructor({parentContainerId, trie}){
        this.parentContainerId = parentContainerId;
        this.trie = trie;
    }
    render(){
        const parentContainer = document.getElementById(this.parentContainerId);
        const trieMatrix = this.trie.getTrieAsMatrix();
        console.log(trieMatrix)
    }
}