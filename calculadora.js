/*Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
 */
function somar(a, b) {
  return a + b
}

/*Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
 */
function subtrair(a, b) {
  return a - b
}

/*Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
 */
function multiplicar(a, b) {
  return a * b
}

/*Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
 */
function dividir(a, b) {
  return a / b
}

/*console.log ("-------------- Teste de Operações / Calculadora --------------")
Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
*/

/*Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
 */
function quadradoDoNumero(a) {
  return a * a
}

/*Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
 */
function mediaDeTresNumeros(n1, n2, n3) {
  let soma2 = somar(n1, n2)
  let somaTotal = somar(soma2, n3)
  return dividir(somaTotal, 3)
}

/*Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
*/
function Porcentagem(nu1, nu2) {
  let x = dividir(nu2, 100)
  return multiplicar(nu1, x)
}

console.log(' Teste das 4 Operações Básicas / Calculadora + * / -')
console.log(somar(10, 5))
console.log(subtrair(10, 5))
console.log(multiplicar(10, 5))
console.log(dividir(10, 5))
console.log(quadradoDoNumero(10))
console.log(mediaDeTresNumeros(2, 4, 6))
console.log(Porcentagem(300, 15))
