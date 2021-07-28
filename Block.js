import sha256 from 'crypto-js/sha256.js'

class Block {
  constructor(index, timestamp, data, previousBlock = "") {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousBlock = previousBlock
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  calculateHash() {
    return sha256(sha256(this.index + this.timestamp + this.previousBlock + this.nonce + JSON.stringify(this.data)).toString()).toString()
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++
      this.hash = this.calculateHash()
    }
    console.log("BLOCK MINED: ", this.hash)
  }
}

export default Block