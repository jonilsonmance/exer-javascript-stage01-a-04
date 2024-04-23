/* 
Crie um script que declare uma variável e verifique se o 
seu valor é uma string. Se for, exiba a mensagem "É uma string",
 caso contrário, exiba a mensagem "Não é uma string".
*/


let valor = prompt(`Digite algo: `)

if(typeof valor === 'string'){
  alert(`É uma String`)
}else{
  alert(`Não pe uma String`)
}