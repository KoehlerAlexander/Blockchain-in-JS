import Block from "./Block.js";

class Blockchain {
  constructor() {
    this.chain = [this.generateGenessisBlock()]
    this.difficulty = 3
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
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      console.log(currentBlock, previousBlock)
      if (currentBlock.previousBlock !== previousBlock.hash) {
        return false
      }

    }
    return true
  }
}

export default Blockchain