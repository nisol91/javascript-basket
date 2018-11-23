// Si scriva una funzione che accetta tre argomenti, un array e due numeri.
// La funzione ritornerà il numero di elementi all’interno dell’array compresi
// tra i due numeri


var num_1 = 2
var num_2 = 4
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var stamp = []
for (var i = 0; i < arr.length; i++) {
  if (num_1 < num_2) {
    if (i >= num_1 && i <= num_2) {
      stamp.push(arr[i])
    }
  } else if (num_2 < num_1) {
    if (i >= num_2 && i <= num_1) {
      stamp.push(arr[i])
    }
  }
}

console.log(stamp);
console.log(stamp.length);
