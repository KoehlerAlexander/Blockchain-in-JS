import sha256 from 'crypto-js/sha256.js'

class Block {
  constructor(index, timestamp, data, previousBlock = "") {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousBlock = previousBlock
    this.hash = this.calculateHash()
  }

  calculateHash() {
    return sha256(sha256(this.index + this.timestamp + this.previousBlock + JSON.stringify(this.data)).toString()).toString()
  }
}

export default Block