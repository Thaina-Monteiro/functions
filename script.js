//1 - crie uma função que exiba uma mensagem no console

function Mensagem() {
  console.log("Olá Pessoal")
}
Mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(nome) {
  console.log(`Meu nome é ${nome}`)
}
meuNome("Thainá");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados(nome, idade, musical) {
  console.log(`Meu nome é ${nome}, tenho ${idade} e curto ${musical}.`)
}
dados("Thainá", "23 anos", "pop e hip hop");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmeEmusica(filme, musica) {
  console.log(`${filme} e ${musica} `)
}
filmeEmusica("Interestelar", "Wonderwall-Oasis");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero) {
  return numero * 3
}
console.log(triplo(3))