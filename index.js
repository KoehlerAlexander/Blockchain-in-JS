import Block from "./Block.js"
import Blockchain from "./Blockchain.js"

const myBlockchain = new Blockchain()
const block1 = new Block(1, Date.now(), { amount: 10 })
const block2 = new Block(2, Date.now(), { amount: 15 })
myBlockchain.addNewBlock(block1)
myBlockchain.addNewBlock(block2)

myBlockchain.chain[1].data = { amount: 100 }
myBlockchain.chain[1].hash = myBlockchain.chain[1].calculateHash()
console.log("Blockchain is Valid: ", myBlockchain.isChainValid())
console.dir(myBlockchain, { depth: null })
