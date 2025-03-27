import Deque from "./DequeDuplicadoMain.mjs";

let Dup = new Deque()

Dup.insertFront("Arroz")
console.log(Dup.print(),"\n")

Dup.insertFront("Arroz")
console.log(Dup.print(),"\n")

Dup.insertBack("Feijão")
console.log(Dup.print(),"\n")

Dup.insertBack("Feijão")
console.log(Dup.print())