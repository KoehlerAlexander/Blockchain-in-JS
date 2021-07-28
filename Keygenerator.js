import elliptic from "elliptic"
const EC = new elliptic.ec("secp256k1")

const key = EC.genKeyPair()
const publicKey = key.getPublic("hex")
const privateKey = key.getPrivate("hex")

console.log("Private Key: ", privateKey)
console.log("Public Key: ", publicKey)