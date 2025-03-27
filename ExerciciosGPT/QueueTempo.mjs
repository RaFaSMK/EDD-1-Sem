import Queue from "./Queue.mjs";

let teste = new Queue(5);

teste.enqueue("João")
teste.enqueue("João")
teste.enqueue("João")
teste.enqueue("João")
teste.enqueue("João")
teste.enqueue("João")

console.log("O tempo estimado é de : ", teste.estimatedWaitTime(), " minutos.")

