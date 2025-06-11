PILHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
import LinkedList from '../LinkedList/LinkedList.mjs'
/*1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    push(5)
    push(9)
    pop()*/
import Stack from '../Stack.mjs'
let stack = new Stack()
stack.push(5)
stack.push(9)
stack.pop()
console.log(stack.print())
/*Torre-de-Hanoi*/
import Stack from '../Stack.mjs';
let TorreA = new Stack();
let TorreB = new Stack();
let TorreC = new Stack();
TorreB.push(1);
TorreB.push(2);
TorreB.push(3);
TorreB.push(4);
TorreC.push(TorreB.pop());
TorreA.push(TorreB.pop());
TorreA.push(TorreC.pop());
console.log("Histórico de remoções:", TorreB.history());

FILAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
/*PLANTÃO*/
let fila = new Queue()
fila.enqueue('José')
fila.enqueue('Sérgio')
fila.enqueue('Joaquim')
/*4. Imprima a fila na ordem correta (Utilize o comando correto).*/
console.log(fila.print())
console.log("")
/*5. Medico padiu pra chamar quem estava na frente da fila, logo ela foi removido da fila.*/
let atendido = fila.dequeue()
/*6. Mostra quem foi atendida e Imprime como ficou a fila*/
console.log({atendido})
console.log("")
console.log(fila.print())
console.log("")
/*7. Chegaram mais 3 (três) pessoas.*/
fila.enqueue('Rafael')
fila.enqueue('Isabela')
fila.enqueue('Cauã')
/*8. Imprima a fila depois das alterações*/
console.log(fila.print())
console.log("")
/*9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:*/
let proximo = fila.peek()
console.log({proximo})
console.log("")
/*10. Medico pe diu pra chamar quem estava na frente da fila, logo ela foi removido da fila.*/
fila.dequeue()
/*4. Imprima a fila na ordem correta (Utilize o comando correto).*/
console.log(fila.print())
console.log("Total de operações:", fila.getOperationCount());

DEQUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
import Deque from './lib/Deque.mjs'
// Lista de compras em que primeiro devem aparecer
// os itens alimentícios e depois os itens de higiene
// e limpeza
let listaCompras = new Deque()
console.log(listaCompras.print())
// Alimentício -> início
listaCompras.insertFront('Arroz')
// Higiene/Limpeza -> final
listaCompras.insertBack('Sabão em pó')
// Alimentício -> início
listaCompras.insertFront('Café')
// Higiene/Limpeza -> final
listaCompras.insertBack('Amaciante')
// Desisti de comprar shampoo
let removido = listaCompras.removeBack()
// Passei pelo corredor, peguei açúcar e removi da lista
removido = listaCompras.removeFront()
console.log({removido})
// Consultar qual o próximo item da lista
let proximo = listaCompras.peekFront()
console.log({proximo})
// Consultar o último item da lista
let ultimo = listaCompras.peekBack()
console.log({ultimo})
/*TESTEDEQUE*/
const deque = new Deque(3); // Capacidade máxima de 3
deque.insertBack("A");
deque.insertBack("B");
deque.insertBack("C");
console.log("Deque atual:", deque.print());
deque.insertBack("D"); // Deve falhar (capacidade atingida)

LINKEEEEEEEEEEEEEEEEEEEEEEEDLIIIIIIIIIIIIIIIIIIIIIIIIIIIIIST
import LinkedList from './LinkedList.js';
const list = new LinkedList();
console.log('Inicial:', list.print()); // []
// Inserções
list.insertHead(1);
list.insertTail(3);
list.insert(1, 2);
console.log('Após inserções:', list.print()); // [1,2,3]
// Remoções
console.log('remove(1):', list.remove(1));          // 2
console.log('Histórico:', list.history());         // [2]
console.log('Estado:', list.print());              // [1,3]
console.log('removeHead():', list.removeHead());   // 1
console.log('Histórico:', list.history());         // [2,1]
console.log('removeTail():', list.removeTail());   // 3
console.log('Histórico:', list.history());         // [2,1,3]
console.log('Vazia?', list.isEmpty);               // true
// Novos valores
list.insertTail(4);
list.insertTail(5);
list.insertTail(6);
console.log('Novo estado:', list.print());         // [4,5,6]
// reverse\list.reverse();
console.log('Invertida:', list.print());           // [6,5,4]
// countOccurrences & removeAll
list.insertTail(5);                               // [6,5,4,5]
console.log("Ocorrências de 5:", list.countOccurrences(5)); // 2
list.removeAll(5);
console.log('Após removeAll(5):', list.print());   // [6,4]
// toArray & peek inválido
console.log('toArray():', list.toArray());         // [6,4]
console.log('peek(100):', list.peek(100));         // undefined
console.log('remove(100):', list.remove(100));     // undefined