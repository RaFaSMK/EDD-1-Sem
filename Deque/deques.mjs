import Deque from "./Deque.mjs";

let listaCompras = new Deque()

console.log(listaCompras.isEmpty)
console.log(listaCompras.print())

// Alimentício -> inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")

// Higiene / limpeza -> final
listaCompras.insertBack("Sabão em Pó")

console.log(listaCompras.print())

listaCompras.insertFront("Ovo")
console.log(listaCompras.print())

let removido = listaCompras.removeFront()
console.log({removido})
console.log(listaCompras.print())

removido = listaCompras.removeBack()
console.log({removido})

let proximo = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log({proximo})
console.log({ultimo})