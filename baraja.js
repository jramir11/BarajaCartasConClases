//Crea una clase de cartas
class Cartas {
    valorCarta=["As","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","jota","reina","rey"];
    simboloCarta=["pica","corazon","trebol","diamante"];
    numeroCArta=[1,2,3,4,5,6,7,8,9,10,11,12,13]
    cartas=[];
    constructor(){
        this.crearCartas();
    }
    //metodo para Crear Cartas
    crearCartas(){
      //let largoSimboloCarta = simboloCarta.length;
      //let largoValorCarta = valorCarta.length;
      for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 13; j++) {
              this.cartas.push(`${this.numeroCArta[j]} - ${this.valorCarta[j]} de ${this.simboloCarta[i]}`);
          }
      }
    }
    //
    getCarta () { return this.cartas;  }
    //metodo para buscar y mostrar una carta especifica
    mostrarCarta(cartaBuscada){
      let existe=false;
      for (let i = 0; i < this.cartas.length; i++) {
        if (cartaBuscada == this.cartas[i]) {
          console.log("Carta Encontrada en la baraja : "+cartaBuscada);
          existe=true;
        }
      }
      if (existe == false){
        console.log("Carta Inexistente en la baraja : "+cartaBuscada);
      }
    }

}


//clase Cartas : se crea el arreglo de cartas = arrCartas
let arrCartas = new Cartas();
//console.log("Baraja : " + arrCartas.cartas);

//clase Cartas : Cantidad de cartas en la baraja
//console.log("Cantidad de Cartas en la baraja : " + arrCartas.cartas.length);

//clase Cartas : Metodo para buscar y mostrar una carta de la baraja
//arrCartas.mostrarCarta("11 - jota de diamante");


//Crea una clase baraja heredada de Cartas
class Baraja extends Cartas {
  
  mezclarse() {   // MEZCLAR la baraja recien creada
     let copy = [], n = arrBaraja.cartas.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * arrBaraja.cartas.length);
  
      // If not already shuffled, move it to the new array.
      if (i in arrBaraja.cartas) {
        copy.push(arrBaraja.cartas[i]);
        delete arrBaraja.cartas[i];
        n--;
      }
    }
    return copy;
  }

  restablecerCartas() {   //RESTABLECER la baraja de cartas
    let nuevoArray=[];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
          nuevoArray.push(`${arrBaraja.numeroCArta[j]} - ${arrBaraja.valorCarta[j]} de ${arrBaraja.simboloCarta[i]}`);
      }
    }
    arrBaraja.cartas = nuevoArray;
  }

  repartirCarta() {
    let cartaExtraida = [];
    // shuffle a una carta del mazo en modo aleatorio
    let i = Math.floor(Math.random() * arrBaraja.cartas.length);
    cartaExtraida = arrBaraja.cartas.splice(i,1);
    return cartaExtraida;
  }


}  //fin clase Baraja

//clase Baraja : se crea el arreglo de la baraja
let arrBaraja = new Baraja();
//console.log(arrBaraja.cartas); //muestra las cartas heredadas
//console.log(arrBaraja.cartas.length);  //cuenta la cantidad de cartas hjeredadas

//clase Baraja : la baraja debe ser capaz de mezclarse
let barajaMezclada = arrBaraja.mezclarse();
//console.log("Baraja Mezclada : " + barajaMezclada);

//clase Baraja : la baraja debe ser capaz de restablecerse pq quedo vacia al mezclar
arrBaraja.restablecerCartas();
//console.log(arrBaraja.cartas);

//clase Baraja : repartir una carta aleatoria
let recuperarCarta = arrBaraja.repartirCarta();
// console.log("Carta Extraida al Azar : " + recuperarCarta);
// console.log("Mazo son la carta Extraida : " + arrBaraja.cartas);



//clase Jugador
class Jugador {
    nombreJugador
    manoJugador = []
    constructor(nombreJugador){
        this.nombreJugador = nombreJugador
    }
}
//clase Jugador : el Jugador debe tener un Nombre
let jugadorCartas = new Jugador ("Ronald");
console.log("Nombre del Jugador : " + jugadorCartas.nombreJugador);


















// //el Jugador debe tener un array de cartas
// function arrayCartasJugador(arrCartas , arrManoJugador) {
//     let n = 5, i;  //5 cartas es la mano de los juegos tipicos
  
//     // While there remain elements to shuffle…
//     while (n) {
//       // Pick a remaining element…
//       i = Math.floor(Math.random() * arrCartas.length);
  
//       // If not already shuffled, move it to the new array.
//       if (i in arrCartas) {
//         arrManoJugador.push(arrCartas[i]);
//         n--;
//       }
// #### eliminar la carta
//     }
  
//     return arrManoJugador;
// }
// let mostrarManoJugador = arrayCartasJugador(baraja.cartas , jugadorCartas.manoJugador);
// //console.log("Mano de Cartas del Jugador : " + mostrarManoJugador);



// //el Jugador debe poder TOMAR una carta DECK DEAL
// function arrayDeackDeal(arrCartas) {
//     //desordenar baraja
//     let barajaMezclada = mezclarse(arrCartas);

//     //recuperar carta del mazo ya desordenado
//     let deackDeal = repartirCarta(barajaMezclada);
  
//     return deackDeal;
// }
// let deackDeal = arrayDeackDeal(baraja.cartas);
// console.log("Carta Sacada de la baraja desordenada : " + deackDeal);
