import Stack from "./StackNavegacaoMain.mjs";

let filaNavegador = new Stack()

filaNavegador.push("Rapaaaaz")
filaNavegador.push("Dança gatinho")
filaNavegador.push("Uuuuuuuuuuuuuuui")
filaNavegador.push("Cavavalo")

console.log("Paginas visitadas: ",filaNavegador.print())

filaNavegador.pop()

console.log("Paginas removidas: ",filaNavegador.history)
console.log("Paginas visitadas: ",filaNavegador.print())

filaNavegador.pop()
filaNavegador.pop()

console.log("Paginas removidas: ",filaNavegador.history)
console.log("Paginas visitadas: ",filaNavegador.print())