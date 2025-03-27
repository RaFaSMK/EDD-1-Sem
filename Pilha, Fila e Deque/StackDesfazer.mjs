import Stack from "./StackDesfazerMain.mjs";

let Desfazer = new Stack(5)

Desfazer.push("Moto")
Desfazer.push("Moto")
Desfazer.push("Moto")
Desfazer.push("Moto")
Desfazer.push("Moto")

console.log(Desfazer.print())

Desfazer.push("Moto")
Desfazer.pop()

console.log(Desfazer.print())

Desfazer.push("Motomoto")

console.log(Desfazer.print())