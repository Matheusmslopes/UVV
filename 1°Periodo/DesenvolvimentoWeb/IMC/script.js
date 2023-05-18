function imc(){
  var peso = document.getElementById("p") .value
  var altura = document.getElementById("a") .value
  
  var imc = peso / (altura**2)

  var div = document.getElementById("out")
  
  div.innerHTML= "Seu IMC é = " + imc.toFixed(1)
  div.style.display= "block"
}

if(imc<=18.5){
  console.log("Baixo peso")
}
else if(imc<25){
  console.log("Normal")
}
else if(imc<30){
  console.log("Sobrepeso")
}
else if(imc<35) {
  console.log("Obesidade I")
}
else if(imc<40){
  console.log("Obesidade II")
}
else{
  console.log("Obesidade III")
}

