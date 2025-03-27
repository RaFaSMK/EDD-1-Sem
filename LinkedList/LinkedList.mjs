// Classe que representa a unidade de armazenamento da lista encadeada

// Não existe posição e sim elemento, tem lugar, começo, meio, fim... Não existe posição numérica.

class Node{
    constructor(val){
        this.data = val // Informação relevante para o usuário
        this.next = null // Ponteiro para o próximo nodo da sequência
    }
}
// Classe que representa a estrutura de dados lista encadeada
export default class LinkedList{
    #head // Inicio da lista (cabeça)
    #tail // Fim da lista (cauda)
    #count // Quantidade de nodos da lista

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty(){
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    }

    // Método para inserir em qualquer posição
    insert(por,val){
        // Cria o nó para armazenar o valor pretendido
        const inserted = new Node(val)
        
        //Primeiro caso é olhar se a lista está vazia
        if (this.isEmpty){
            this.#head = inserted
            this.#tail = inserted

        }

        // 2° Caso: lista não vazia, inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted
        }


        // 3° Caso: inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }

        // 4° Caso: posição intermediária
        else{
            let before = this.#head // Começa pelo primeiro nodo
            
            for (let i = 1; i < pos; i++){
                before = before.next
            }

            let after = before.next

            insert.next = after

            before.next = inserted
        }
        this.#count++
    }

    //Método para inserção na primeira posição (atalho)
    insertHead(val){
        this.insert(0,val)
    }

    //Método para inserção na ultima posição (atalho)
    insertTail(val){
        this.insert(this.#count,val)
    }

    //Método para remoção de um nodo da lista
    remove(pos){
        // 1° Caso: se a lista está vazia ou se a posição informada está fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        // 2° Caso: remoção do inicio da lista
        if (pos === 0){
            removed = this.#head

            this.#head = this.#head.next

            // Atualizando o tail em caso de remoção do único nodo restante
            if(this.#count === 1){
                this.#tail = null
            }
        }
    }
}