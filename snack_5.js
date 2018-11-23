// //fondi array di UGUALE lunghezza
//
// var arr_1 = ['a', 'b', 'c'];
// var arr_2 = [1, 2, 3];
//
// var arr_fusion = [];
//
// for (var i = 0; i < arr_1.length; i++) {
//   arr_fusion.push(arr_1[i]);
//   arr_fusion.push(arr_2[i]);
// }
//
// console.log(arr_fusion);

//e' una cazzata..lui pusha prima il primo elemento di arr_1 poi il primo elemento di arr_2..poi il secondo di arr_1 e cosi via.


//fondi array di DIVERSA lunghezza

var arr_1 = ['a', 'b', 'c', 'd'];
var arr_2 = [1, 2, 3, 4, 5, 6, 7];

var longer
if (arr_2.length > arr_1.length) {
  longer = arr_2;
} else if (arr_1.length > arr_2.length) {
  longer = arr_1;
}
// console.log(shorter);

var arr_fusion = [];


for (var i = 0; i < longer.length; i++) {
    arr_fusion.push(arr_1[i]);
    arr_fusion.push(arr_2[i]);
}

for (var i = 0; i < arr_fusion.length; i++) {
  if (typeof(arr_fusion[i]) === 'undefined') {
    console.log(arr_fusion[i]);
    arr_fusion.splice(i,1)
  }
}

console.log(arr_fusion);
