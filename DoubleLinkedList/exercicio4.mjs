import DoublyLinkedList from "./DoublyLinkedList.mjs";

const lista = new DoublyLinkedList()

lista.insertTail("Item1")
lista.insertTail("Item2")
lista.insertTail("Item1")
lista.insertTail("Item3")
lista.insertTail("Item1")

console.log("Lista antes da remoção de 'Item1': ", lista.print())
lista.removeAll("Item1")
console.log("Lista após remoção de 'Item1': ", lista.print())