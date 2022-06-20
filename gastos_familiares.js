/*  ### Sistema de gastos familiar

crie um objeto que possuirá 2 propiedades, ambas do tipo array:
    - receitas: []
    - despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e 
irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
seguido do valor do saldo
*/

let financas = {
  receitas: [100, 200, 150.55, 500, 2500.88, 10],
  despesas: [50, 300, 120.9, 1900.86, 300.55],
};

function somando(array) {
  let result = 0;
  for (let item of array) {
    result += item;
  }
  return result;
}

function calcularfinanças() {
  const calculoReceitas = somando(financas.receitas);
  const calculoDespesas = somando(financas.despesas);
  const saldoRestante = calculoReceitas - calculoDespesas;
  let result;

  if (saldoRestante > calculoReceitas) {
    result =
      "Sua conta está positiva, Saldo atual R$" +
      calculoReceitas.toFixed(2) +
      " saldo apos quitar debitos: R$" +
      saldoRestante.toFixed(2) + 
      " Divida atual: R$" + 
      calculoDespesas;
  } else if (saldoRestante <= calculoReceitas) {
    result =
      "Sua conta está positiva, Saldo atual R$" +
      calculoReceitas.toFixed(2) +
      " saldo apos quitar debitos: R$" +
      saldoRestante.toFixed(2) + 
      " Divida atual: R$" + 
      calculoDespesas;
  }

  return result;
}
console.log(calcularfinanças());
