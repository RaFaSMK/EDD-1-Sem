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

                this.#removedHistory.push(removed.data) 
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

                this.#removedHistory.push(removed.data)
            }

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
            let output = '( '
            let node = this.#head
            for(let i = 0; i < this.#count; i++) {
                if (output !== '( ') output += ', '
                output += `[${i}]: ${node.data}`
                node = node.next
            }
            output += ` ), count: ${this.#count}`
            return output
        }

        history(){
            let output = '( '
            if (this.#removedHistory.length != 0){
                for(let i = 0; i < this.#removedHistory.length; i++) {
                    if (output !== '( ') output += ', '
                    output += `[${i}]: ${this.#removedHistory[i]}`
                }
                output += ` )`
            }
            else{
                output = "Nenhuma remoção ainda"
            }
            return output
        }

        reverse() {
            const values = this.toArray() // copia os valores
            this.#head = null
            this.#tail = null
            this.#count = 0
        
            for(let i = values.length - 1; i >= 0; i--) {
                this.insertTail(values[i])
            }
        }
        

        countOccurrences(val){
            let ocorrencia = this.#head
            let cont = 0

            for(let i = 0; i < this.#count; i++){
                if(ocorrencia.data.includes(val)){
                    cont += 1
                }
                ocorrencia = ocorrencia.next
            }
            let output = `Ocorrências de '${val}' : ${cont}`

            return output
        }

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