/*

  Pari e Dispari

  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.

*/

function startNumGame(numType) {
  
  let isGameInProgress = true;

  while (isGameInProgress) {

    const userInput = Number(prompt('Inserisci un numero da 1 a 5:'));

    if (isNaN(userInput) || userInput > 5 || userInput < 1) {
      alert(`Il numero "${userInput}", non è un numero valido. Riprova`);
      continue;
    };

  };
  
};