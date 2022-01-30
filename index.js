/* Atividade 1 - Palíndromo*/

//solução 1
function verificaPalindromo(string){
  /*if(!string) return;

  return string.split("").reverse().join("") === string*/

  return !string ? console.log("Diferente") : string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("italia"));