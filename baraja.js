class Cartas {
    valorCarta=["As","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","jota","reina","rey"];
    simboloCarta=["pica","corazon","trebol","diamante"];
    cartas=[];
    constructor(){
        this.crearCartas();
    }
    crearCartas(){
        //let largoSimboloCarta = simboloCarta.length;
        //let largoValorCarta = valorCarta.length;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.cartas.push(`${this.valorCarta[j]} de ${this.simboloCarta[i]}`);
                
            }
        }
    }

}

//se crea el arreglo de cartas = baraja
let baraja = new Cartas();
//console.log("Baraja : " + baraja.cartas);


//cuanta cantidad de cartas = 52
//console.log("Cantidad de Cartas : " + baraja.cartas.length);



//funcion para MEZCLAR la baraja recien creada
function mezclarse(array) {
    let copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }
let barajaMezclada = mezclarse(baraja.cartas);
//console.log("Baraja Mezclada : " + barajaMezclada);



//se restablece baraja a su orden inicial
baraja = new Cartas();
//console.log("Baraja Restablecida : " + baraja.cartas);



//repartir una carta aleatoria
function repartirCarta(array) {
    // shuffle a una carta del mazo en modo aleatorio
    let i = Math.floor(Math.random() * array.length);
  
    return array[i];
  }
let recuperarCarta = repartirCarta(baraja.cartas);
//console.log("Carta al Azar : "+  recuperarCarta);




//repartir una carta aleatoria y Eliminarla de la baraja
function repartirCartaYEliminar(array) {
    // shuffle a una carta del mazo en modo aleatorio
    let idxCartaEliminada = Math.floor(Math.random() * array.length);
    let cartaEliminada = array[idxCartaEliminada];

    let ArraySinCartaEliminada = [];
    let n = array.length;

    while (n) {
        if (idxCartaEliminada != n) {
            ArraySinCartaEliminada.push(array[n]);
          }
        n--;
    }

//    console.log("Carta Eliminada : " + cartaEliminada);
    return ArraySinCartaEliminada;
  }
let ArraySinCartaEliminada = repartirCartaYEliminar(baraja.cartas);
// console.log("Cantidad Cartas en la Baraja : " + ArraySinCartaEliminada.length);
// console.log("Baraja s/carta Eliminada : " +  ArraySinCartaEliminada);





//crear Clase Jugador
class Jugador {
    nombreJugador
    manoJugador = []
    constructor(nombreJugador){
        this.nombreJugador = nombreJugador
    }
}
//el Jugador debe tener un Nombre
let jugadorCartas = new Jugador ("Ronald");
//console.log(jugadorCartas);


//el Jugador debe tener un array de cartas
function arrayCartasJugador(arrCartas , arrManoJugador) {
    let n = 5, i;  //5 cartas es la mano de los juegos tipicos
  
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * arrCartas.length);
  
      // If not already shuffled, move it to the new array.
      if (i in arrCartas) {
        arrManoJugador.push(arrCartas[i]);
        n--;
      }
    }
  
    return arrManoJugador;
}
let mostrarManoJugador = arrayCartasJugador(baraja.cartas , jugadorCartas.manoJugador);
//console.log("Mano de Cartas del Jugador : " + mostrarManoJugador);



//el Jugador debe poder TOMAR una carta DECK DEAL
function arrayDeackDeal(arrCartas) {
    //desordenar baraja
    let barajaMezclada = mezclarse(arrCartas);

    //recuperar carta del mazo ya desordenado
    let deackDeal = repartirCarta(barajaMezclada);
  
    return deackDeal;
}
let deackDeal = arrayDeackDeal(baraja.cartas);
console.log("Carta Sacada de la baraja desordenada : " + deackDeal);
