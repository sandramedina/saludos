let nombre = prompt("como se llama?");

function functionSaludar() {
  alert("hola " + nombre!);
}

let botonSaludar = document.getElementById("saludar");
botonSaludar.addEventListener("click", functionSaludar);

functionSaludar();
