class Node{
    constructor(val){
        this.prev = null
        this.data = val
        this.next = null
    }
}

export default class DoublyLinkedList{
    #head //inicio da lista (cabeça)
    #tail // fim da lista (cauda)
    #count //quantidade de elementos da lista

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    //getter que retorna se a lista está vazia ou não
    get isEmpty(){
        return this.#count === 0
    }

    //getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    }

    //metodo PRIVADO que encontra um nodo por sua posição
    #findNode(pos){
        
    }
}