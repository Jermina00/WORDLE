let intentos = 6;
let palabras = ["RATON", "REDES", "TRECE", "QUESO", "MONOS", "MATES"];
let palabra = '';

window.addEventListener('load', init);

function init() {
  console.log('Esto se ejecuta solo cuando se carga la página web');
  seleccionarPalabra();
  
  const button = document.getElementById("guess-button");
  button.addEventListener("click", intentar);
}

function seleccionarPalabra() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
}

function generarGrid(intento) {
  const GRID = document.getElementById("grid");
  GRID.innerHTML = ''; 
  
  const ROW = document.createElement('div');
  ROW.className = 'row';
  
  for (let i in palabra) {
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
    if (intento[i] === palabra[i]) { 
      SPAN.innerHTML = intento[i];
      SPAN.style.backgroundColor = 'green';
    } else if (palabra.includes(intento[i])) {
      SPAN.innerHTML = intento[i];
      SPAN.style.backgroundColor = 'yellow';
    } else { 
      SPAN.innerHTML = intento[i];
      SPAN.style.backgroundColor = 'grey';
    }
    ROW.appendChild(SPAN);
  }
  
  GRID.appendChild(ROW);
}

function intentar() {
  const intento = leerIntento();
  
  generarGrid(intento);
  
  if (intento === palabra) {
    terminar("¡Felicidades! Has adivinado la palabra.");
  } else {
    intentos--;
    if (intentos === 0) {
      terminar("¡Agotaste todos tus intentos! La palabra correcta era: " + palabra);
    }
  }
}

function terminar(mensaje) {
  const input = document.getElementById("guess-input");
  input.disabled = true;
  const button = document.getElementById("guess-button");
  button.disabled = true;
  const contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}

function leerIntento() {
  let intento = document.getElementById("guess-input").value.toUpperCase();
  return intento;
}
