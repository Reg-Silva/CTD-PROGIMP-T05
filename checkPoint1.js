function microondas1(opcao, tempo) {
  if (opcao === 'pipoca' && tempo >= 10 && tempo <= 20) {
    return 'Prato pronto, bom apetite!!!.'
  } else if (opcao === 'pipoca' && tempo < 10) {
    return 'Tempo insuficiente, bom apetite!!!.'
  } else if (opcao === 'pipoca' && tempo > 20 && tempo <= 30) {
    return 'Seu prato queimou, bom apetite!!!.'
  } else if (opcao === 'pipoca' && tempo > 30) {
    return 'Kabum, bom apetite!!!.'
  } else {
    return 'Prato inexistente.'
  }
}

function microondas2(opcao, tempo) {
  if (opcao === 'macarrão' && tempo >= 8 && tempo <= 16) {
    return 'Prato pronto, bom apetite!!!.'
  } else if (opcao === 'macarrão' && tempo < 8) {
    return 'Tempo insuficiente!!!.'
  } else if (opcao === 'macarrão' && tempo > 16 && tempo <= 24) {
    return 'Seu prato queimou!!!.'
  } else if (opcao === 'macarrão' && tempo > 24) {
    return 'Kabum!!!.'
  } else {
    return 'Prato inexistente.'
  }
}

function microondas3(opcao, tempo) {
  if (opcao == 'carne' && tempo >= 15 && tempo <= 30) {
    return 'Prato pronto, bom apetite!!!.'
  } else if (opcao === 'carne' && tempo < 15) {
    return 'Tempo insuficiente!!!.'
  } else if (opcao === 'carne' && tempo > 30 && tempo <= 45) {
    return 'Seu prato queimou!!!.'
  } else if (opcao === 'carne' && tempo > 45) {
    return 'Kabum!!!.'
  } else {
    return 'Prato inexistente.'
  }
}

function microondas4(opcao, tempo) {
  if (opcao === 'feijão' && tempo >= 12 && tempo <= 24) {
    return 'Prato pronto, bom apetite!!!.'
  } else if (opcao === 'feijão' && tempo < 12) {
    return 'Tempo insuficiente!!!.'
  } else if (opcao === 'feijão' && tempo > 24 && tempo <= 36) {
    return 'Seu prato queimou!!!.'
  } else if (opcao === 'feijão' && tempo > 36) {
    return 'Kabum!!!.'
  } else {
    return 'Prato inexistente.'
  }
}

function microondas5(opcao, tempo) {
  if (opcao === 'brigadeiro' && tempo >= 8 && tempo <= 16) {
    return 'Prato pronto, bom apetite!!!.'
  } else if (opcao === 'brigadeiro' && tempo < 8) {
    return 'Tempo insuficiente!!!.'
  } else if (opcao === 'brigadeiro' && tempo > 16 && tempo <= 24) {
    return 'Seu prato queimou!!!.'
  } else if (opcao === 'brigadeiro' && tempo > 24) {
    return 'Kabum!!!.'
  } else {
    return 'Prato inexistente.'
  }
}
console.log(microondas1('pipoca', 10)) // Para cada função mudar o tempo dentro do console

console.log(microondas2('macarrão', 8))

console.log(microondas3('carne', 15))

console.log(microondas4('feijão', 12))

console.log(microondas5('brigadeiro', 16))
