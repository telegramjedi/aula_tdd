const CarrinhoDeCompras = require("../dados/CarrinhoDeCompras")
const Produto = require("../dados/Produto")
const MaiorEMenor = require("../dados/MaiorEMenor")


let carrinho = new CarrinhoDeCompras();

carrinho.adiciona(new Produto("Liquidificador", 250.0));
carrinho.adiciona(new Produto("Geladeira", 450.0));
carrinho.adiciona(new Produto("Jogo de pratos", 70.0));


let algoritmo = new MaiorEMenor();

algoritmo.encontra(carrinho);

console.log("O produto de menor valor: " +
algoritmo.produtoMenorValor().desc());

console.log("O produto de maior valor : " +
algoritmo.produtoMaiorValor().desc())