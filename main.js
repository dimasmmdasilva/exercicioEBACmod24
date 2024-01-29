class Fruta {
    constructor(nome, cor, sabor) {
    this.nome = nome;
    this.cor = cor;
    this.sabor = sabor;
    }

    mostrarDetalhes() {
    console.log(`${this.nome} é ${this.cor} e tem um sabor ${this.sabor}.`);
    }

}

class FrutaAzeda extends Fruta {
    exibirAcidez(acidez) {
    console.log(`${this.nome} tem nível de acidez ${acidez}.`);
    }
}

class FrutaDoce extends Fruta {
    exibirDoçura(doçura) {
    console.log(`${this.nome} tem índice de doçura ${doçura}.`);
    }
}

const maca = new Fruta('maçã', 'vermelha', 'doce');
const pera = new Fruta('pera', 'amarela', 'doce');
const uva = new Fruta('uva', 'roxa', 'doce');

const limao = new FrutaAzeda('limão', 'verde', 'azedo');
const laranja = new FrutaAzeda('laranja', 'laranja', 'azedo misturado com doçe');
const kiwi = new FrutaAzeda('kiwi', 'verde', 'azedo misturado com doçe');

const abacaxi = new FrutaDoce('abacaxi', 'amarelo', 'doce misturado azedo');
const manga = new FrutaDoce('manga', 'laranja', 'doce');
const morango = new FrutaDoce('morango', 'vermelho', 'doce misturado azedo');

console.log('');
console.log('');
maca.mostrarDetalhes();
pera.mostrarDetalhes();
uva.mostrarDetalhes();
console.log('');
console.log('');
limao.mostrarDetalhes();
limao.exibirAcidez('alto');
console.log('');
laranja.mostrarDetalhes();
laranja.exibirAcidez('médio');
console.log('');
kiwi.mostrarDetalhes();
kiwi.exibirAcidez('médio');
console.log('');
console.log('');
abacaxi.mostrarDetalhes();
abacaxi.exibirDoçura('muito doce');
console.log('');
manga.mostrarDetalhes();
manga.exibirDoçura('doce');
console.log('');
morango.mostrarDetalhes();
morango.exibirDoçura('médio');
console.log('');
console.log('');
