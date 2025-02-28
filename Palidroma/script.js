/*

  Palidroma

  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma

*/

const userWord = prompt('Scrivi una parola per verificare che essa sia palindroma:');


if (isStringPalindrome(userWord)) alert(`Corretto! La parola "${userWord}" è palindroma!`);
else alert(`La parola "${userWord}" non è palindroma.`);


function isStringPalindrome(string) {
  const str = string.toLowerCase();
  
  const splittedStr = str.split('');
  
  let reversedStr;

  for (let i = splittedStr.length - 1; i > 0; i--) {
    console.log(splittedStr[i]);
  };

  return str === reversedStr;
};