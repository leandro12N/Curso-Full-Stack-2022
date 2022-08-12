function laClaveSecreta(array){
    let acumulador = "";
    for(i=19;i>=0;i--){  
         acumulador= acumulador + array[i]
    } return acumulador
}
laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] )