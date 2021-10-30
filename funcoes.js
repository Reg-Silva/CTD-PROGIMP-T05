//Ex 1
function conversorinch(f) {
  let y = f * 2.54
  return console.log(y)
}
conversorinch(10)

//Ex 2
function url(string) {
  let result = `http://.${string}.com.br`
  return console.log(result)
}
let a = 'mago'
let b = 'wild'
url(`regis.${a}${b}`)

//Ex 3
function frase(string) {
  let result = `${string}!`
  return console.log(result)
}
frase(`Mano do ceú, só por Deus`)

//Ex 4
function IdCachorro(idade) {
  let d = idade * 7
  return console.log(d)
}
IdCachorro(43)

//Ex 5
function salario(valor) {
  let ab = valor / 160
  return console.log(ab)
}
salario(10000)

//Ex 6
function imc(peso, altura) {
  let i = peso / (altura * altura)
  return console.log(i / 100)
}
imc(90.0, 0.182)

//Ex 7
function maiscula(minuscula) {
  return minuscula.toUpperCase() + '!'
}

const x = maiscula('olhai por nós')
console.log(x)

//Ex 8

//Ex 9
function calculateCircumference(radius) {
  return 2 * Math.PI * radius
}

console.log(Math.PI)
// expected output: 3.141592653589793

console.log(calculateCircumference(10))
// expected output: 62.83185307179586
