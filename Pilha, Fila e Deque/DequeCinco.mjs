import Deque from "./DequeCincoMain.mjs";

let CapacidadeCinco = new Deque(5)

CapacidadeCinco.insertFront("Arroz")
CapacidadeCinco.insertFront("Arroz")
CapacidadeCinco.insertFront("Arroz")
CapacidadeCinco.insertFront("Arroz")
CapacidadeCinco.insertFront("Arroz")

console.log(CapacidadeCinco.print())

CapacidadeCinco.insertFront("Feijão")
CapacidadeCinco.insertFront("Feijão")
CapacidadeCinco.insertFront("Feijão")

console.log(CapacidadeCinco.print())