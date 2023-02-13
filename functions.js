function PrintNum1() {
  num1 = document.getElementById("num1").innerHTML;
  alert(num1);
}
let beatAcertou = new Audio("RAPAIZ.mp3");
let beatErrou = new Audio("ERROU.mp3");
let correto;
let contagem = 0;

let recorde;
document.addEventListener("keyup", (event) => {
  // if (event.isComposing || event.keyCode ==="s") {

  if (event.key == correto && event.key >= 0 && event.key <= 9) {
    beatAcertou.load();
    beatAcertou.play();
    contagem++;
    document.getElementById("contador-contagem").innerHTML = contagem;
    CarregarNumeros();
  } else if (event.key >= 0 && event.key <= 9) {
    beatErrou.load();
    beatErrou.play();
    contagem = 0;
    document.getElementById("contador-contagem").innerHTML = contagem;
    CarregarNumeros();
  }

  //  }
  // do something
});

function CarregarNumeros() {

    //Busca o recorde no banco de dados(local storage)
  if(JSON.parse(localStorage.getItem("recorde")) == null){
    recorde = 0;
  }
  else{
    recorde = JSON.parse(localStorage.getItem("recorde")).recorde;
  }
 //caso a contagem supere ou atinja o recorde, ele começa a se atualizar
  if (contagem >= recorde) {
    recorde = contagem;
  }

  document.getElementById("contador-recorde").innerHTML = recorde;
  salvarRecorde = {
    recorde: recorde,
  };
  localStorage.setItem("recorde", JSON.stringify(salvarRecorde));

  tipoCalculo = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  let num1 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  let num2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  if (tipoCalculo == 1) {
    while (num1 + num2 > 9 || num1 + num2 == 0) {
      num1 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      num2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    }
  } else {
    while (num1 - num2 > 9 || num1 - num2 <= 0) {
      num1 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      num2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    }
  }
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  if (tipoCalculo == 1) {
    document.getElementById("sinal").innerHTML = "+";
    correto = num1 + num2;
  } else {
    document.getElementById("sinal").innerHTML = "-";
    correto = num1 - num2;
  }
}
