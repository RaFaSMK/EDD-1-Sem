import Queue from "./QueueClienteMain.mjs";

let FilaCliente = new Queue()

console.log(FilaCliente.OperationCount)
console.log(FilaCliente.print())

FilaCliente.enqueue("Jose")

console.log(FilaCliente.OperationCount)
console.log(FilaCliente.print())

console.log("Chamando cliente: ",FilaCliente.dequeue())

console.log(FilaCliente.OperationCount)
console.log(FilaCliente.print())

FilaCliente.enqueue("Maria")

console.log(FilaCliente.OperationCount)
console.log(FilaCliente.print())