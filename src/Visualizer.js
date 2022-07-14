export class Visualizer {
    constructor({parentContainerId, trie}){
        const parentContainer = document.getElementById(parentContainerId);
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 400;
        parentContainer.append(canvas);
        this.trie = trie;
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.height = '400px';
        ctx.save();
        this.ctx = ctx;
        this.circleRadius = 25;
        this.spaceBetweenCircles = 10;
        this.canvasPadding = 10;
    }

    #getCoord(i,j){
        const x = (((this.circleRadius * 2) + this.spaceBetweenCircles) * j) + this.circleRadius + this.canvasPadding;
        const y = (((this.circleRadius * 2) + this.spaceBetweenCircles) * i) + this.circleRadius + this.canvasPadding;
        return [x,y];
    }

    #addNode(x,y,value,isFinishedWord){
        this.ctx.beginPath();
        this.ctx.arc(x,y, this.circleRadius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.fillStyle = isFinishedWord ? 'lightgreen' : 'lightgrey';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.fillText(value.toUpperCase(), x, y, 45);
        this.ctx.fill;
    }

    render(){
        const trieMatrix = this.trie.getTrieAsMatrix();
        for(let i = 0; i < trieMatrix.length; ++i){
            for(let j = 0; j < trieMatrix[i].length; ++j){
                const [x,y] = this.#getCoord(i,j);
                const { value, isFinishedWord} = trieMatrix[i][j];
                this.#addNode(x,y, value, isFinishedWord);
            }
        }
    }
}