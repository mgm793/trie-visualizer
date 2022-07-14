import { Trie } from './Trie';
import { Visualizer } from './Visualizer';

(() => {
    const trie = new Trie();
    trie.insert('hello');
    trie.insert('hola');
    const visualizer = new Visualizer({parentContainerId: 'trie-graph', trie});
    visualizer.render();
})()