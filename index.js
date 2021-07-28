import Blockchain from "./Blockchain.js"
import Transaction from "./Transaction.js"

const myBlockchain = new Blockchain()
myBlockchain.addTransaction(new Transaction("robert", "alex", 50))
myBlockchain.addTransaction(new Transaction("alex", "nina", 50))

console.log("Starting Mining")
myBlockchain.minePendingTransactions("robert")
console.log("Kontostand von Robert ist: ", myBlockchain.getBallanceForAddress("robert"))
console.log("Kontostand von Alex ist: ", myBlockchain.getBallanceForAddress("alex"))
console.log("Kontostand von Nina ist: ", myBlockchain.getBallanceForAddress("nina"))
console.log(myBlockchain.isChainValid())