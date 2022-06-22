/*
 ## Celsius em fahrenheit
  
    Crie uma função que receba uma string em celsius ou 
    fahrenheit e faça a transformação
    de uma unidade para a outra 

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");
  let formulaFahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9; //arrow function ja retorna o resultado direto
  let formulaCelsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32;
  let degreeSingCelsius = "C";
  let degreeSingFahrenheit = "F";

  let result;

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  } else if (fahrenheitExists) {
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    result = formulaFahrenheitToCelsius(updatedDegree) + degreeSingCelsius;
  } else if (celsiusExists) {
    let updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    result = formulaCelsiusToFahrenheit(updatedDegree) + degreeSingFahrenheit;
  }

  return result;
}

try {
  console.log(transformDegree("50C"));
  transformDegree("50Z");
} catch (error) {
  console.log(error.message);
}
