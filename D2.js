/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number_5 = 32;
// let number_6 = 23;
// if (number_5 > number_6) {
//   console.log(number_5, "è maggiore di", number_6);
// } else {
//   console.log(number_6, "è maggiore di", number_5);
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number = parseInt(prompt("Inserisci un numero!"));
// if (number != 5) {
//   console.log("not equal");
//   alert("not equal");
// } else {
//   console.log("equal");
//   alert("equal");
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// var number_4 = parseInt(prompt("inserisci un numero"));

// if (number_4 % 5 == 0) {
//   alert("divisibile per 5");
// } else {
//   alert("non divisibile per 5");
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number_1 = parseInt(prompt("numero 1"));
// let number_2 = parseInt(prompt("numero 2"));
// let somma = number_1 + number_2;

// if (number_1 == 8 || number_2 == 8) {
//   alert("uno dei due numeri forniti è 8 ");
// } else if (somma == 8) {
//   alert("la somma dei 2 numeri è 8");
// } else {
//   alert("nessuno dei due numeri è 8 e la loro somma non è 8");
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart = 63;
// let spedizione = 10;
// if (totalShoppingCart > 50) {
//   alert("incudendo la spedizione il totale è: " + totalShoppingCart);
// } else {
//   totalShoppingCart += spedizione;
//   alert("incudendo la spedizione il totale è: " + totalShoppingCart);
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart_2 = 63;
// let spedizione_2 = 10;
// let promozione = (totalShoppingCart_2 * 20) / 100;
// if (totalShoppingCart_2 > 50) {
//   totalShoppingCart_2 -= promozione;
//   alert("incudendo la spedizione il totale è: " + totalShoppingCart_2);
// } else {
//   totalShoppingCart_2 -= promozione;
//   totalShoppingCart_2 += spedizione_2;
//   alert("incudendo la spedizione il totale è: " + totalShoppingCart_2);
// }
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number_7 = 200;
// let number_8 = 48;
// let number_9 = 124;

// let pos_1;
// let pos_2;
// let pos_3;

// if (number_7 > number_8 && number_7 > number_9) {
//   pos_1 = number_7;
//   if (number_8 > number_9) {
//     pos_2 = number_8;
//     pos_3 = number_9;
//   } else {
//     pos_2 = number_9;
//     pos_3 = number_8;
//   }
// } else if (number_7 > number_8 && number_7 < number_9) {
//   pos_1 = number_9;
//   pos_2 = number_7;
//   pos_3 = number_8;
// } else if (number_7 > number_9 && number_7 < number_8) {
//   pos_1 = number_8;
//   pos_2 = number_7;
//   pos_3 = number_9;
// } else {
//   pos_3 = number_7;
//   if (number_8 > number_9) {
//     pos_1 = number_8;
//     pos_2 = number_9;
//   } else {
//     pos_1 = number_9;
//     pos_2 = number_8;
//   }
// }

// console.log(pos_1, pos_2, pos_3);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let valore = prompt("inserisci un vvalore"); //viene fornito sempre un risultato negativo in quanto l imput utente sarà sempre una stringa
// if (typeof valore == "number") {
//   alert("hai fornito un valore nnumerico");
// } else {
//   alert("non hai fornito un valore numerico");
// }

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number_3 = parseInt(prompt("inserisci un numero"));
// if (number_3 % 2 == 0) {
//   alert("il numero fornito è pari");
// } else {
//   alert("il numero fornito è dispari");
// }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let val = 4;
// if (val < 10 && val > 5) {  //aggiungendo and(val>5) evitiamo che un numero minore di 5 entri per ordine di scrittura nel primo if, dando risultato errato
//   console.log("Meno di 10");
// } else if (val < 5) {
//   console.log("Meno di 5");
// } else {
//   console.log("Uguale a 10 o maggiore");
// }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(me.skills);
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const lista_vuota = [];
console.log(lista_vuota);
lista_vuota.push(1);
lista_vuota.push(2);
lista_vuota.push(3);
lista_vuota.push(4);
lista_vuota.push(5);
lista_vuota.push(6);
lista_vuota.push(7);
lista_vuota.push(8);
lista_vuota.push(9);
lista_vuota.push(10);
console.log(lista_vuota);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

lista_vuota[lista_vuota.length - 1] = 100;
console.log(lista_vuota);
