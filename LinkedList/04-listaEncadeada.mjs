import LinkedList from "./LinkedList.mjs"

const lista = new LinkedList()

lista.insert(0, 'Fusca')
lista.insert(0, 'Corcel')

console.log(lista.print())

lista.insert(2, 'Opala')
lista.insert(3, 'Chevette')
lista.insert(4, 'Maverick')

console.log(lista.print())

lista.insert(3, 'Brasília')

console.log(lista.print())

let removido = lista.remove(0)

console.log({removido})

console.log(lista.print())

//testando indexOf()
let idxFusca = lista.indexOf("Fusca")
let idxOpala = lista.indexOf("Opala")
let idxBelina = lista.indexOf("Belina")
console.log({idxFusca, idxOpala, idxBelina})

let pos0 = lista.peek(0)
let pos3 = lista.peek(3)
let pos10 = lista.peek(10)

console.log({pos0, pos3, pos10})