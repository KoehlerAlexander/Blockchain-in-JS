import Blockchain from "./Blockchain.js"
import Transaction from "./Transaction.js"
import elliptic from "elliptic"
const EC = new elliptic.ec("secp256k1")

const myKey = EC.keyFromPrivate("your key here")
const myWallet = myKey.getPublic("hex")

const myBlockchain = new Blockchain()

const transaction1 = new Transaction(myWallet, "some public key", 50)
transaction1.signTransaction(myKey)

myBlockchain.addTransaction(transaction1)

console.log("Starting Mining")
myBlockchain.minePendingTransactions(myWallet)

console.log("Balance of my address: ", myBlockchain.getBallanceForAddress(myWallet))
console.log("Chain is valid: ", myBlockchain.isChainValid())