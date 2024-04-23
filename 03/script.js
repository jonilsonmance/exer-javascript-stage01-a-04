/*
Crie um script que declare uma variável e verifique se o seu valor é um número. Se for,
 exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
*/

let input = prompt(`Digite um numero: `)

if(typeof(Number(input))=== 'number' && !isNaN(Number(input)) ){
  alert(`É um numero.`)
}else{
  alert(`Não é um numero.`)
}