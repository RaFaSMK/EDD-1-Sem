PILHAAAAAAAAAAAAAAAAAAAAA
/*  - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.*/
export default class Stack {
    #data       // Vetor privado
    #historyData // Histórico de remoções
    constructor() {
        this.#data = []     // Vetor vazio
        this.#historyData = []
    }
    // Método para inserção no vetor
    push(val) {
        this.#data.push(val)
    }
    // Método para remoção do vetor
    pop() {
        const removed = this.#data.pop()
        if (removed !== undefined) {
          this.#historyData.push(removed)
        }
        return removed
      }    
    // Método para consultar o topo (última posição) da pilha sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }
    // Getter para informar se a pilha está ou não vazia (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }
    // Método para imprimir a pilha
    print() {
        return `[ ${this.#data.join(", ")} ]`
    }
    // Método para retornar o histórico de elementos removidos
    history() {
        return this.#historyData.length > 0 ? `[ ${this.#historyData.join(", ")} ]` : "Nenhum item removido ainda."
    }
}

FILAAAAAAAAAAAAAAAAAAAAA
/*  - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.*/
export default class Queue {
    #data       // Vetor privado
    #operationCount  // Contador de operações
    constructor() {
        this.#data = []     // Vetor vazio
        this.#operationCount = 0 // Inicializa o contador
    }
    // Método para inserção na fila
    enqueue(val) {
        this.#data.push(val)
        this.#operationCount++
    }
    // Método para remoção da fila
    dequeue() {
        if (this.isEmpty) return undefined
        this.#operationCount++
        return this.#data.shift()
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
    // Método para imprimir a fila
    print() {
        return `[ ${this.#data.join(", ")} ]`
    }
    // Método que retorna o total de operações feitas
    getOperationCount() {
        return this.#operationCount
    }
}

DEQUEEEEEEEEEEEEEEEEEEEEE
/*    - Deque = Double-Ended Queue (fila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (insertFront/insertBack) e desenfileiramento (removeFront/
      removeBack), acontecendo em qualquer uma das extremidades da estrutura.
    - Como consequência, o deque NÃO SEGUE o princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação dos deques são situações em que filas precisam aceitar
      a inserção de itens prioritários e a desistência do último item.*/
export default class Deque {
    #data       // Vetor privado
    #maxSize
    constructor() {
        this.#data = []     // Vetor vazio
        this.#maxSize = maxSize
    }
    // Método para inserção no início da estrutura
    insertFront(val) {
        this.#data.unshift(val)
    }
    // Método para inserção no final da estrutura
    insertBack(val) {
        this.#data.push(val)
    }
    MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXSIIIIIIIIZEEEEEE
    // Método para inserção no início da estrutura verificando o tamanho máximo
    insertFront(val) {
        if (this.#data.length >= this.#maxSize) {
            console.log("Erro: Capacidade máxima atingida.")
            return
        }
        this.#data.unshift(val)
    }
    // Método para inserção no final da estrutura verificando o tamanho máximo
    insertBack(val) {
        if (this.#data.length >= this.#maxSize) {
            console.log("Erro: Capacidade máxima atingida.")
            return
        }
        this.#data.push(val)
    }
    MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXSIIIIIIIIZEEEEEE
    // Método para remoção do início da estrutura
    removeFront() {
        return this.#data.shift()
    }
    // Método para remoção do final da estrutura
    removeBack() {
        return this.#data.pop()
    }
    // Método para consultar o início da estrutura
    peekFront() {
        return this.#data[0]
    }
    // Método para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }
    // Getter para informar se o deque está ou não vazio
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }
    // Método para imprimir o deque
    print() {
        return `[ ${this.#data.join(", ")} ]`
    }   
}

LINKEEEEEEEEEEEEEEEEEEEEEEEEEEEDLIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIST
/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
    de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
    informação e outra que guarda o endereço do próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
    se encontram todos os nodos da lista. Sabemos apenas onde está o
    primeiro e o último nodo da sequência. Os nodos intermediários precisam
    ser encontrados partindo-se do primeiro e percorrendo a sequência
*/
/* Classe que representa a unidade de armazenamento da lista encadeada */
class Node {
    constructor(val) {
        this.data = val     // Informação relevante para o usuário
        this.next = null    // Ponteiro para o próximo nodo da sequência
    }
}
/* Classe que representa a estrutura de dados lista encadeada */
export default class LinkedList {
    #head       // Início da lista (cabeça)
    #tail       // Fim da lista (cauda)
    #count      // Quantidade de nodos da lista
    #removedHistory // Vetor para armazenar o histórico de remoções
    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
        this.#removedHistory = []
    }
    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0
    }
    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }
    // Método para inserir em qualquer posição
    insert(pos, val) {
        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val)
        // 1º caso: a lista está vazia
        if(this.isEmpty) {
            this.#head = inserted   // 1º nodo
            this.#tail = inserted   // último nodo            
        }
        // 2º caso: lista não vazia, inserção na primeira posição
        else if(pos === 0) {
            // O sucessor do nodo inserido será o nodo que atualmente
            // ocupa a primeira posição da lista
            inserted.next = this.#head
            // O início da lista passa a ser o novo nodo inserido
            this.#head = inserted
        }
        // 3º caso: inserção no final da lista
        else if(pos >= this.#count) {
            // O atual último nodo da lista passa a apontar para o inserido
            this.#tail.next = inserted
            // O último nodo passa a ser o nodo inserido
            this.#tail = inserted
        }
        // 4º caso: posição intermediária
        else {
            // Nodo da posição ANTERIOR à de inserção
            let before = this.#head     // Começa pelo primeiro nodo   
            // Percurso até a posição ANTERIOR à de inserção,
            // saltando de nodo em nodo por meio do ponteiro next
            for(let i = 1; i < pos; i++) before = before.next
            // Nodo da posição POSTERIOR à de inserção
            let after = before.next
            // O sucessor do nodo inserted passa a ser o nodo after
            inserted.next = after
            // O sucessor do nodo before passa a ser o nodo inserted
            before.next = inserted
        }
        this.#count++
    }
    // Método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }
    // Método para inserção na última posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }
    // Método para remoção de um nodo na lista
    remove(pos) {
        // 1º caso: a lista está vazia ou a posição informada está
        // fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined
        let removed
        // 2º caso: remoção do início da lista
        if (pos === 0) {
            removed = this.#head    // Marca o primeiro nodo para remoção
            // O início da lista passa a ser o nodo seguinte
            this.#head = this.#head.next
            // Atualizando o tail em caso de remoção do único nodo restante
            if(this.#count === 1) this.#tail = null
        }
        // 3º caso: remoção de nodo intermediário ou final
        else {
            let before = this.#head
            // Percorre a lista até a posição ANTERIOR à re remoção
            for(let i = 1; i < pos; i++) before = before.next
            // O nodo removido será o seguinte
            removed = before.next
            let after = removed.next
            // O nodo anterior ao removido passa a apontar para o nodo
            // posterior ao removido
            before.next = after
            // Atualiza o tail em caso de remoção do último nodo
            if(pos === this.#count - 1) this.#tail = before
        }
        this.#removedHistory.push(removed.data)
        // Decrementa contagem de nodos da lista
        this.#count--
        // Retorna a informação armazenada no nodo removido
        return removed.data
    }
    // Método para remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }
    // Método para remover o último nodo da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1)
    }
    // Método para verificar a posição da primeira ocorrência de um valor na lista
    // Retorna:
    // 1) Caso o valor exista, a posição onde ele foi encontrado
    // 2) Caso o valor não exista, -1
    indexOf(val) {
        // 1º caso: lista vazia
        if(this.isEmpty) return -1
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            // Se o nodo contém o valor procurado, retorna a posição do nodo
            if (node.data === val) return i
            node = node.next
        }
        // Se chegamos ao final da lista sem encontrar o valor, retornamos -1
        return -1
    }
    // Método que retorna (sem remover) um nodo da lista, de acordo com sua posição
    peek(pos) {
        // 1º caso: lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined
        // 2º caso: busca sequencial
        let node = this.#head
        for(let i = 0; i < pos; i++) node = node.next
        return node.data
    }
    // Método para retornar (sem remover) o valor do primeiro nodo da lista (atalho)
    peekHead() {
        return this.peek(0)
    }
    // Método para retornar (sem remover) o valor do último nodo da lista (atalho)
    peekTail() {
        return this.peek(this.#count - 1)
    }
    // Método para exibição da lista encadeada
    print() {
        let node = this.#head
        let index = 0
        const elements = []
    
        while (node !== null) {
            elements.push(`[${index}]: ${node.data}`)
            node = node.next
            index++
        }
    
        return `( ${elements.join(', ')} ), count: ${this.#count}`
    }    
    // Método para exibir o histórico de remoções
    history() {
        if (this.#removedHistory.length === 0) {
            return "Nenhuma remoção ainda"
        }
    
        const output = this.#removedHistory
            .map((val, i) => `[${i}]: ${val}`)
            .join(', ')
    
        return `( ${output} )`
    }
    // Método para inverter a lista    
    reverse() {
        const vals = this.toArray().reverse()
        this.#head = this.#tail = null
        this.#count = 0
        vals.forEach(v => this.insertTail(v))
      }
    // Método para contar as ocorrências
    countOccurrences(val) {
        let node = this.#head
        let cnt = 0
        while (node) {
          if (node.data === val) cnt++
          node = node.next
        }
        return cnt
    }
    // Método para remover todos os itens com o valor no parâmetro
    removeAll(val){
        while (this.#head && this.#head.data === val) {
            this.#head = this.#head.next
            this.#count--
        }
        let current = this.#head
        while (current.next) {
            if (current.next.data === val) {
                current.next = current.next.next
                this.#count--
            } 
            else {
                current = current.next
            }
        }
        this.#tail = current
    }
    // Método para transformar em array
    toArray(){
        let array = []
        let item = this.#head
        for(let i = 0; i < this.#count; i++){
            array.push(item.data)
            item = item.next
        }
        return array
    }
}