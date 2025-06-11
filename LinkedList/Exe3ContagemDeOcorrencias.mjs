import LinkedList from "./LinkedList.mjs";

const ContagemDeOcorrencias = new LinkedList()

ContagemDeOcorrencias.insert(0,'item1')
ContagemDeOcorrencias.insert(1,'item2')
ContagemDeOcorrencias.insert(2,'item1')
ContagemDeOcorrencias.insert(3,'item3')
ContagemDeOcorrencias.insert(4,'item1')   

console.log("Lista atual: " , ContagemDeOcorrencias.print())

console.log(ContagemDeOcorrencias.countOccurrences('item1'))
console.log(ContagemDeOcorrencias.countOccurrences('item2'))