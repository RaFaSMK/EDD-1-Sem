/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from "./Stack.mjs";

let TorreA = new Stack()
let TorreB = new Stack()
let TorreC = new Stack()

TorreB.push(1)
TorreB.push(2)
TorreB.push(3)
TorreB.push(4)

console.log("Torre A: " + TorreA.print())
console.log("Torre B: " + TorreB.print())
console.log("Torre C: " + TorreC.print())

TorreC.push(TorreB.pop())
TorreA.push(TorreB.pop())
TorreA.push(TorreC.pop())
TorreC.push(TorreB.pop())
TorreB.push(TorreA.pop())
TorreC.push(TorreA.pop())
TorreC.push(TorreB.pop())
TorreA.push(TorreB.pop())
TorreA.push(TorreC.pop())
TorreB.push(TorreC.pop())
TorreB.push(TorreA.pop())
TorreA.push(TorreC.pop())
TorreC.push(TorreB.pop())
TorreA.push(TorreB.pop())
TorreA.push(TorreC.pop())

console.log("\nTorre A: " + TorreA.print())
console.log("Torre B: " + TorreB.print())
console.log("Torre C: " + TorreC.print())