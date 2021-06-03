import Block from "./Block.js"

const block1 = new Block(0, Date.now(), "My First Block", "")
console.log(block1.calculateHash())