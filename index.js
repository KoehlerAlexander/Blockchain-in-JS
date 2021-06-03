import Block from "./Block.js"
import Blockchain from "./Blockchain.js"

const myBlockchain = new Blockchain()
const block1 = new Block(1, Date.now(), "My first Block! When will I be rich?")
const block2 = new Block(2, Date.now(), "After the second one I must be rich. Right?")
myBlockchain.addNewBlock(block1)
myBlockchain.addNewBlock(block2)
console.log(myBlockchain)