import LinkedList from "./LinkedList.mjs";

const reverse = new LinkedList()

reverse.insert(0,'item1')
reverse.insert(1,'item2')
reverse.insert(2,'item3')

console.log("Lista antes de inverter: ", reverse.print())

reverse.reverse()

console.log("Lista após inversão: ", reverse.print())