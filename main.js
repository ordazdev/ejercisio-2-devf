function generarNumerosAleatorios() {
    let numerosAleatorios = [];
    for (let i = 0; i < 10; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numeroAleatorio);
    }
    mostrarResultado("Array de números aleatorios: " + numerosAleatorios.join(', '));
}

function convertirCadenaAArray() {
    let entradaUsuario = prompt("Ingresa varias palabras separadas por coma:");
    if (entradaUsuario !== null) {
        let arrayPalabras = entradaUsuario.split(',');
        mostrarResultado("Array de palabras: " + arrayPalabras.join(', '));
    }
}

function operacionesConArray() {
    let array = [10, 40, 30, 20, 15, 5];
    let arrayOrdenado = array.slice().sort((a, b) => a - b);
    let numeroMenor = Math.min(...array);
    let numeroMayor = Math.max(...array);

    mostrarResultado(
        "Arreglo ordenado de menor a mayor: " + arrayOrdenado.join(', ') + "\n" +
        "Número menor: " + numeroMenor + "\n" +
        "Número mayor: " + numeroMayor
    );
}

function mostrarResultado(mensaje) {
    document.getElementById('output').textContent = mensaje;
}