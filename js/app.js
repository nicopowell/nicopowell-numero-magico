let btnComenzarJuego = document.getElementById("btnComenzarJuego");
let seccionJuego = document.getElementById("seccionJuego");
let alerta = document.querySelector(".alert");
let formulario = document.querySelector("form");

let numeroMagico;
let intentos;

btnComenzarJuego.addEventListener("click", iniciarJuego);
formulario.addEventListener("submit", trabajoFormulario);

function iniciarJuego() {
  intentos = 0;
  console.log("Iniciando Juego");
  btnComenzarJuego.className = "d-none";
  seccionJuego.className = "container px-4";
  formulario.className = 'rounded-4 py-5 gap-3'
  numeroMagico = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(numeroMagico);
}

function trabajoFormulario(e) {
  e.preventDefault();
  let input = parseInt(document.querySelector("input").value);
  intentos++
  if (numeroMagico === input) {
    alerta.innerHTML = `Adivinaste el número en ${intentos} intentos, felicidades!!!`;
    formulario.reset();
    formulario.className = 'd-none'
    btnComenzarJuego.className = 'btn btn-primary px-5 py-3'
  } else if (numeroMagico < input) {
    alerta.innerHTML = `El número secreto es menor que ${input}`;
  } else {
    alerta.innerHTML = `El número secreto es mayor que ${input}`;

  }
}
