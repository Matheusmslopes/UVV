var buttonConfirmar

buttonConfirmar = document.getElementById("botaocad").disabled = true

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

checkbox = document.getElementById('conf')

checkbox.addEventListener('change', f1)

function f1(event) {
  if (event.currentTarget.checked) {
    document.getElementById("botaocad").disabled = false;
  } else {
    document.getElementById("botaocad").disabled = true;

  }
}






