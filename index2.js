//Atividade 2
function substituiPares(array){
  if(!array.length) return "Campo vazio"
  for(let i = 0; i<array.length; i++){
    if(array[i] === 0){
      console.log(`${array[i]} Você já é zero!!`);
    }else if(array[i] % 2 === 0){
      console.log(`Substituindo ${array[i]} por 0...`)
      array[i] = 0;
    }
  }
  return array;
}

let arr = [0, 1, 5, 6, 8, 16, 17, 19, 25, 30, 62, 255, 256]
console.log(substituiPares(arr))