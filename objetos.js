let pessoa = {
    PrimeiroNome: 'Irmão do',
    SegundoNome: 'Jorel',
    Idade: 10,
    CorDosOlhos: 'preto',
    hobbies: ['música', 'filmes', 'esportes'],
    endereco: {
        rua: 'Rua do bobos',
        numero: 0,
        cidade: 'São Paulo',
        estado: 'SP',
    },
}

console.log(pessoa);
console.log(pessoa.PrimeiroNome);
console.log(pessoa.SegundoNome, pessoa.Idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

//atribuição via desestruturação:

let {
    PrimeiroNome, 
    SegundoNome, 
    endereco: {cidade}
} = pessoa;

console.log(`O nome do meu cliente é ${PrimeiroNome} ${SegundoNome} é de ${cidade}`);

//Atribuição via desestruturação com arrays

const array = [1,2,3,4,5];
let [valor01,valor02, ...resto] = array;
console.log(valor01);
console.log(valor02);
console.log(resto);
