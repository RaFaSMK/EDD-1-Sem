/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from "./Queue.mjs";

let filaBanco = new Queue()

filaBanco.enqueue("Cliente101")
filaBanco.enqueue("Cliente102")
filaBanco.enqueue("Cliente103")
filaBanco.enqueue("Cliente104")
filaBanco.enqueue("Cliente105")

console.log("Fila do banco no momento: ",filaBanco.print(), "\n")

console.log("Chamando cliente: ",filaBanco.dequeue(), "\n")

console.log("Fila do banco no momento: ",filaBanco.print(), "\n")

filaBanco.enqueue("Cliente106")
filaBanco.enqueue("Cliente107")

console.log("Fila do banco no momento após os novos clientes: ",filaBanco.print(), "\n")

console.log("Próximo cliente a ser chamado: ",filaBanco.peek(), "\n")

console.log("Chamando cliente: ", filaBanco.dequeue(), "\n")

console.log("Fila do banco no momento: ",filaBanco.print())