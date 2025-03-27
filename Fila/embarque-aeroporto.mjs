/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from "./Queue.mjs";

let filaAeroporto = new Queue()

filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

console.log("Fila no momento: ",filaAeroporto.print(),"\n")

console.log("Chamando o passageiro para embarque: ",filaAeroporto.dequeue(),"\n")

console.log("Fila no momento: ",filaAeroporto.print(),"\n")

filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")

console.log("Fila no momento após os novos passageiros: ",filaAeroporto.print(),"\n")

console.log("O próximo passageiro a embarcar é o:", filaAeroporto.peek(),"\n")

console.log("Chamando o passageiro para embarque: ",filaAeroporto.dequeue(),"\n")

console.log("Fila no momento: ",filaAeroporto.print(),"\n")