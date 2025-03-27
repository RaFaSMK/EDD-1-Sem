/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/
export default class Queue {

    #data       // Vetor privado

    #operationCount // Variável para contar as operações

    constructor() {
        this.#data = []     // Vetor vazio
        this.#operationCount = 0
    }

    // Método para inserção na fila
    enqueue(val) {
        this.#data.push(val)
        this.#operationCount += 1
    }

    // Método para remoção da fila e contar as operações
    dequeue() {
      if (this.#data.length != 0) {
        this.#operationCount += 1
        return this.#data.shift()
      }
    }

    // Método para consultar o início da fila sem remover o elemento
    peek() {
      return this.#data[0]
    }

    // Getter para informar se a fila está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
      return this.#data.length === 0
    }

    get OperationCount(){
      return `${this.#operationCount}`
    }

    // Método que imprime a fila (para efeitos de depuração)
    print() {
      let output = '[ '
      for(let i = 0; i < this.#data.length; i++) {
        if(output !== '[ ') output += ', '
        output += `(${i}): ${this.#data[i]}`
      }
      return output + ' ]'
    }
}