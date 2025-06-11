import LinkedList from "./LinkedList.mjs";

const removerOcorrencias = new LinkedList()

removerOcorrencias.insert(0,'Item1')
removerOcorrencias.insert(1,'Item2')
removerOcorrencias.insert(2,'Item1')
removerOcorrencias.insert(3,'Item3')
removerOcorrencias.insert(4,'Item1')

let val = 'Item1'

console.log(`Lista antes da remoção de '${val}':`  + removerOcorrencias.print())

removerOcorrencias.removeAll(val)

console.log(`Lista após remoção de '${val}': ` + removerOcorrencias.print())

