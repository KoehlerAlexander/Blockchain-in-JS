import Block from "./Block.js"
import Blockchain from "./Blockchain.js"

const myBlockchain = new Blockchain()
const block1 = new Block(1, Date.now(), { amount: 10 })
const block2 = new Block(2, Date.now(), { amount: 15 })
console.log("Mining Block 1 ...")
myBlockchain.addNewBlock(block1)
console.log("Mining Block 2 ...")
myBlockchain.addNewBlock(block2)
console.dir(myBlockchain, { depth: null })
