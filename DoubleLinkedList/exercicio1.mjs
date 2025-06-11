import DoublyLinkedList from "./DoublyLinkedList.mjs";

const lista = new DoublyLinkedList()

lista.insertTail("Item1")
lista.insertTail("Item2")
lista.insertTail("Item3")

console.log("Lista atual:", lista.print())
console.log(lista.history())
lista.remove(1)
console.log("Lista após remoção: ", lista.print())
console.log(lista.history())