import Block from "./Block.js"
import Transaction from "./Transaction.js"

class Blockchain {
  constructor() {
    this.chain = [this.generateGenessisBlock()]
    this.difficulty = 3
    this.pendingTransactions = []
    this.miningReward = 100
  }

  generateGenessisBlock() {
    const block = new Block(Date.now(), [], "000")
    return block
  }

  getLatestBlock() {
    if (this.chain.length > 0) {
      return this.chain[this.chain.length - 1]
    }
  }

  minePendingTransactions(rewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash)
    block.mineBlock(this.difficulty)

    console.log("Block sucessfully mined")
    this.chain.push(block)
    this.pendingTransactions = [new Transaction(null, rewardAddress, this.miningReward)]
  }

  getBallanceForAddress(address) {
    let balance = 0

    for (const block of this.chain) {
      for (const transaction of block.transactions) {
        if (transaction.fromAddress === address) {
          balance -= transaction.amount
        }
        if (transaction.toAddress === address) {
          balance += transaction.amount
        }
      }
    }
    return balance
  }

  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error("Transaction must include from and toAddress")
    }

    if (!transaction.isValid()) {
      throw new Error("Transaction is invalid")
    }

    this.pendingTransactions.push(transaction)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (!currentBlock.hasValidTransactions()) {
        return false
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }
      if (currentBlock.previousBlock !== previousBlock.hash) {
        return false
      }

    }
    return true
  }
}

export default Blockchain