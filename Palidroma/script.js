/*

  Palidroma

  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma

*/

const userWord = prompt('Scrivi una parola per verificare che essa sia palindroma:');


function reverseString(string){
  return string.split('').reverse().join('');
};