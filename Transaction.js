import sha256 from 'crypto-js/sha256.js'
import elliptic from "elliptic"
const EC = new elliptic.ec("secp256k1")
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress
    this.toAddress = toAddress,
      this.amount = amount
  }

  calculateHash() {
    sha256(this.fromAddress + this.toAddress + this.amount).toString
  }

  signTransaction(signingKey) {
    if (signingKey.getPublic("hex") !== this.fromAddress) {
      throw new Error("You cannot sign transactions for other wallets")
    }

    const transactionHash = this.calculateHash()
    const sig = signingKey.sign(transactionHash, "base64")
    this.signature = sig.toDER("hex")
  }

  isValid() {
    if (this.fromAddress === null) {
      return true
    }

    if (!this.signature || this.signature.length === 0) {
      throw new Error("No signature in Transaction")
    }

    const publicKey = EC.keyFromPublic(this.fromAddress, "hex")
    return publicKey.verify(this.calculateHash(), this.signature)
  }
}

export default Transaction