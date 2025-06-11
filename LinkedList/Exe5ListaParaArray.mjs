import LinkedList from "./LinkedList.mjs";

const Array = new LinkedList()

Array.insert(0,'item1')
Array.insert(1,'item2')
Array.insert(2,'item3')

console.log("Lista atual como array: " , Array.toArray())