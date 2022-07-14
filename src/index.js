import { Trie } from './Trie';
(() => {
    const trie = new Trie();
    trie.insert('hello');
    trie.insert('hola');
    document.getElementById('code').innerHTML = JSON.stringify(trie.getTrieAsMap(), null, 4);
})()