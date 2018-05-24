
function currencyConverter(source,valNum) {
  valNum = parseFloat(valNum);
  
  var inputEuro = document.getElementById("inputEuro");
  var inputZloty = document.getElementById("inputZloty");
  var inputDolar = document.getElementById("inputDolar");
  var inputFunt = document.getElementById("inputFunt");
   


  if (source=="inputEuro") {
    inputZloty.value = (valNum * 4.30).toFixed(2);
    inputDolar.value = (valNum * 1.17).toFixed(2);
    inputFunt.value = (valNum *0.88 ).toFixed(2);
    
  }
  if (source=="inputZloty") {
    inputEuro.value=(valNum*0.23).toFixed(2);
    inputDolar.value=(valNum*0.27).toFixed(2);
    inputFunt.value=(valNum*0.2).toFixed(2);
    
  }
  if (source=="inputDolar") {
    inputEuro.value=(valNum*0.85).toFixed(2);
    inputZloty.value=(valNum*3.67).toFixed(2);
    inputFunt.value=(valNum* 0.75 ).toFixed(2);
    
  }
  if (source=="inputFunt") {
    inputEuro.value=(valNum*1.14).toFixed(2);
    inputZloty.value=(valNum*4.90).toFixed(2);
    inputDolar.value=(valNum*1.34).toFixed(2);
    
  }
  

}
