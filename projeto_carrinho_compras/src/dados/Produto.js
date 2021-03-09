module.exports = class Produto {
    #desc
    #valor

    constructor(desc, valor){
        this.#desc = desc
        this.#valor = valor
    }

    desc(){
        return(this.#desc)
    }

    valor(){
        return(this.#valor)
    }
}