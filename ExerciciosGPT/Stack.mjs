/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export default class Stack {

    #data       // Vetor privado
    #limiteOperacoes
    #cont = 0

    constructor(limiteOperacoes) {
        this.#data = []     // Vetor vazio
        this.#limiteOperacoes = limiteOperacoes
    }

    // Método para inserção no vetor
    push(val) {
        this.#data.push(val)
    }

    // Método para remoção do vetor
    
    pop() {
        if (this.#cont < this.#limiteOperacoes){
            this.#cont++
            return this.#data.pop()
        } 
        else{
            throw new Error("As operações chegou ao limite")
        }
    }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////