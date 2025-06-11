import LinkedList from "./LinkedList.mjs";

const historico = new LinkedList()

historico.insert(0,'item1')
historico.insert(1,'item2')
historico.insert(2,'item3')

console.log("Lista atual: ", historico.print())
console.log("Histórico de remoções: ", historico.history())

historico.remove(1)

console.log("Lista após remoção: ", historico.print())
console.log("Histórico de remoções: ", historico.history())