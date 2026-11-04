// Desafio Classificador Nível de Heroi
// Deve ser utilizado: variáveis, operadores, laços de repetição, estruturas condicionais.
// Objetivo: Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize a estrutura de decisão
// para apresentar alguma das mensagens abaixo:
// Se a XP for menor do que 1000 = Ferro
// Se a XP for entre 1001 e 2000 = Bronze
// Se a XP for entre 2001 e 5000 = Prata 
// Se a XP for entre 5001 e 6000 = Ouro
// Se a XP for entre 6001 e 7000 = Platina 
// Se a XP for entre 7001 e 9000 = Ascendente
// Se a XP for entre 9001 e 10000 = Imortal
// Se a XP for maior ou igual a 10001 = Radiante

// Saída: "O herói **{nome}** está no nível de **{nível}** com **{XP}** pontos de experiência."

let nomeHeroi = "Arthur"
let xpHeroi = 7500
switch (true) {
    case (xpHeroi < 1000):
      console.log(`O herói ${nomeHeroi} está no nível de Ferro com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
      console.log(`O herói ${nomeHeroi} está no nível de Bronze com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
      console.log(`O herói ${nomeHeroi} está no nível de Prata com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 5001 && xpHeroi <= 6000):
      console.log(`O herói ${nomeHeroi} está no nível de Ouro com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 6001 && xpHeroi <= 7000):
      console.log(`O herói ${nomeHeroi} está no nível de Platina com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 7001 && xpHeroi <= 9000):
      console.log(`O herói ${nomeHeroi} está no nível de Ascendente com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
      console.log(`O herói ${nomeHeroi} está no nível de Imortal com ${xpHeroi} pontos de experiência.`);
      break;
    case (xpHeroi >= 10001):
      console.log(`O herói ${nomeHeroi} está no nível de Radiante com ${xpHeroi} pontos de experiência.`);
      break;
    default:
      console.log(`O herói ${nomeHeroi} está em um nível desconhecido com ${xpHeroi} pontos de experiência.`); 
}
