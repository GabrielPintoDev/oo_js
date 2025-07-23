function Veiculo(tipo, rodas) {
    this.tipo = tipo;
    this.rodas = rodas;
}

function Carro(tipo, rodas, velocidade_max) {
    Veiculo.call(this, tipo, rodas)

    this.velocidade_max = velocidade_max;
}

function Moto(tipo, rodas, velocidade_max) {
    Veiculo.call(this, tipo, rodas)

    this.velocidade_max = velocidade_max;
}

const carro1 = new Carro("Fiat Uno", 4, 140);
const carro2 = new Carro("Ford Ka", 4, 160);
const moto = new Moto("Titan", 2, 135);

console.log(carro1);
console.log(carro2);
console.log(moto);