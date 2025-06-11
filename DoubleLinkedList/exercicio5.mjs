import DoublyLinkedList from "./DoublyLinkedList.mjs";

const lista = new DoublyLinkedList()

lista.insertTail("Item1")
lista.insertTail("Item2")
lista.insertTail("Item3")

console.log("Lista como array: ",lista.toArray())