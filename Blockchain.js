import Block from "./Block.js";

class Blockchain {
  constructor() {
    this.chain = [this.generateGenessisBlock()]
  }

  generateGenessisBlock() {
    const block = new Block(0, Date.now(), "Genessis Block", "000")
    return block
  }

  getLatestBlock() {
    if (this.chain.length > 0) {
      return this.chain[this.chain.length - 1]
    }
  }

  addNewBlock(newBlock) {
    newBlock.previousBlock = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }
}

export default Blockchain