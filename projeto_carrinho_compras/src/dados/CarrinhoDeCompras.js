module.exports = class CarrinhoDeCompras {
    #listaProdutos

    constructor(){
        this.#listaProdutos = []
    }

    produtos(){
        return(this.#listaProdutos)
    }

    adiciona(produto){
        this.#listaProdutos.push(produto)
    }
}