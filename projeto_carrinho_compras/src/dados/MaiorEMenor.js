module.exports = class MaiorEMenor {
	#produtoMenorValor;
	#produtoMaiorValor;

    constructor(){
        this.#produtoMaiorValor = null;
        this.#produtoMenorValor = null;
    }

	encontra(carrinhoDeCompras) {
		for(const produto of carrinhoDeCompras.produtos()) {
			if(this.#produtoMenorValor == null || produto.valor() < this.#produtoMenorValor.valor()) {
				this.#produtoMenorValor = produto;
			}
			else if (this.#produtoMaiorValor == null || produto.valor() > this.#produtoMaiorValor.valor()) {
				this.#produtoMaiorValor = produto;
			}
		}
	}

	produtoMenorValor() {
		return(this.#produtoMenorValor);
	}

	produtoMaiorValor() {
		return(this.#produtoMaiorValor);
	}	
}