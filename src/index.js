// Functions
function calcularVitoria(vitoria, derrota){
    let valorVitoria = vitoria - derrota
    return valorVitoria
}

function pegarPrimeiroNome(nome, splitChar){
    let nomeSplitado = nome.split(" ")
    return nomeSplitado[0]
}
// Codigo
let vitoria = 15
let derrota = 6
let saldoRank = calcularVitoria(15, 6)
let nickname = pegarPrimeiroNome("Junior MotoCross BMX", " ")
let ranking 

console.log(`Bem vindo ao sistema de Rankings, ${nickname}. O saldo de vitórias determinará seu ranking, saldo esse que será calculado pela subtração do número de vitórias e derrotas até nessa temporada!`)

if (saldoRank <= 10) {
    ranking = "Ferro";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
} else if (saldoRank > 10 && saldoRank <= 20) {
    ranking = "Bronze";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
} else if (saldoRank > 20 && saldoRank <= 50) {
    ranking = "Prata";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
} else if (saldoRank > 50 && saldoRank <= 80) {
    ranking = "Ouro";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
} else if (saldoRank > 80 && saldoRank <= 90) {
    ranking = "Diamante";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
} else if (saldoRank > 90 && saldoRank <= 100) {
    ranking = "Lendário";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
} else {
    ranking = "Imortal";
    console.log(`Olá, ${nickname}! Você possui ${vitoria} vitórias e ${derrota} derrotas! Seu ranking é ${ranking}!`);
}