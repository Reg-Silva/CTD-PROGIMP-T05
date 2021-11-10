function podeSubir(altura, acompanhado) {
  if (altura >= 1.4 && altura <= 2.0) {
    return true 
  } else if (altura >= 1.2 && altura < 1.4 && acompanhado ===1) {
    return true 
  }  else {
    return false 
  }
}

console.log(podeSubir(1.39, 1 ))

//true, pode subir

//false, não pode subir

/*1 = acompanhado, 0 = desacompanhado*/

/*Caso A, atendendo o requisito altura, pode subir, sozinho ou acompanhado(a)*/

/*Caso B, só poderá subir caso obtenha a altura entre 1.20 e 1.39, mas somente
 acompanhado(a)*/

/*Caso C, caso tenha altura menor que 1.20, não poderá subir nem acompanhado(a)*/

/*Qualquer outra probabilidade não poderá subir, exemplo altura = 2.10*/

function podeSubir1(altura, acompanhado) {
  if (altura >= 1.4 && altura <= 2.0) {
    return 'Acesso autorizado.' // CASO A
  } else if (altura >= 1.2 && altura < 1.4 && acompanhado === 1) {
    return 'Acesso autorizado somente com acompanhante.' // CASO B
  } 
   else {
    return 'Acesso negado.' // QUALQUER OUTRA PROBABILIDADE
  }
}

//console.log(podeSubir1(2.0, 0)) //Observação nome da função *podeSubir1*
