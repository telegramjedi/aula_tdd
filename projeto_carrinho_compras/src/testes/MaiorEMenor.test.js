const CarrinhoDeCompras = require("../dados/CarrinhoDeCompras")
const Produto = require("../dados/Produto")
const MaiorEMenor = require("../dados/MaiorEMenor")


let carrinho;

beforeAll(() => {
    carrinho = new CarrinhoDeCompras();

    carrinho.adiciona(new Produto("Liquidificador", 250.0));
    carrinho.adiciona(new Produto("Geladeira", 450.0));
    carrinho.adiciona(new Produto("Jogo de pratos", 70.0));
    
});


test("Encontra Jogo de pratos como menor valor.", () =>{
    algoritmo = new MaiorEMenor();
    algoritmo.encontra(carrinho);

    expect(algoritmo.ProdutoMenorValor().valor()).toBe(70);

    throw new Exception("Teste não implementado!") 
})

test("Encontra Jogo de pratos como maior valor.", () =>{
    algoritmo = new MaiorEMenor();
    algoritmo.encontra(carrinho);

    expect(algoritmo.ProdutoMaiorValor().valor()).toBe(100);

    throw new Exception("Teste não implementado!") 
})

