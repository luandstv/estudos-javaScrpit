/* ### Transformar notas escolares

Crie um algoritimo que transfoorme as notas do sistema numérico para 
o sistema de notas em caracteres. Ex.: A B C

* de 90 para cima -  A
* entre 80 - 89   -  B
* entre 70 - 79   -  C
* entre 60 - 69   -  D
*menor que 60     -  F

*/


function getScore(nota) {
  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 89;
  let notaC = nota >= 70 && nota <= 79;
  let notaD = nota >= 60 && nota <= 69;
  let notaF = nota < 60 && nota >= 0;

  let scoreFinal;

  if (notaA) {
    scoreFinal = "nota A";
  } else if (notaB) {
    scoreFinal = "Nota B";
  } else if (notaC) {
    scoreFinal = "Nota C";
  } else if (notaD) {
    scoreFinal = "Nota D";
  } else if (notaF) {
    scoreFinal = "Nota F";
  } else {
    scoreFinal = "nota invalida";
  }

  return scoreFinal;
}

console.log(getScore(-1))
console.log(getScore(101))
console.log(getScore(100))
console.log(getScore(82))
console.log(getScore(73))
console.log(getScore(65))
console.log(getScore(55))
