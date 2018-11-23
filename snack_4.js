var string = 'ciao';

var array = string.split('');

console.log(array);

arrRev = [];
for (var i = array.length -1; i >= 0; i--) {
  arrRev.push(array[i]);
}
console.log(arrRev);

var strInv = arrRev.join('');

console.log(strInv);

// se no ciclo sulla stringa

// var stringInv = '';
//
// for (var i = array.length -1; i >= 0; i--) {
//   // console.log(string[i]);
//   stringInv += string[i];//per le stringhe vale come per gli array: creo una stringa vuota e poi a differenza degli array devo fare una somma per pusharci gli elementi.
// }
// console.log(stringInv);
