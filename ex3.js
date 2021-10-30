/*Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.
 */
let somar = 15 + 37
console.log(somar)

/*) Repita o processo anterior, mas utilizando outro operador.*/
let multiplicar = 15 * 37
console.log(multiplicar)

/* Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.*/
let x = 15
let y = 37
console.log(x + y)

/* Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)
 */
let z = '1'
let w = 1
console.log(z + w)

/*Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)
 */
let a = 'olá'
let b = 23
console.log(`${a} ${b}`)

/*Crie mensagens concatenadas com valores diferentes.
 */
let nome = 'Reginaldo'
let sobrenome = 'Roberto da Silva'
let idade = '43 anos'
let nomeCompleto = nome + ' ' + sobrenome + ' ' + idade

console.log(nomeCompleto)

/* calcular o Índice de Massa Corporal de cada registro*/
let nome1 = 'Ana Paula'
let idade1 = 26
let peso = 55
let altura = 1.62
let plano = true
let imc = 0

imc = peso / (altura * altura)
console.log(imc)

console.log(
  `${nome1} tem ${idade1} anos e seu índice de massa corporal é de ${imc}`
)
