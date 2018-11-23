//oggetti zucchina con proprieta, poi calcola il peso e poi calcola il peso diviso fra lunghezze minori e maggiori di 10cm


var zucchine = [
  {
    varietà: 'uno',
    peso : 3,
    lunghezza: 18,
  },
  {
    varietà: 'due',
    peso : 2,
    lunghezza: 9,
  },
  {
    varietà: 'tre',
    peso : 7,
    lunghezza: 11,
  },
  {
    varietà: 'quattro',
    peso : 9,
    lunghezza: 8,
  },
  {
    varietà: 'cinque',
    peso : 1,
    lunghezza: 10,
  },
  {
    varietà: 'sei',
    peso : 13,
    lunghezza: 6,
  },
  {
    varietà: 'sette',
    peso : 17,
    lunghezza: 10,
  },
  {
    varietà: 'otto',
    peso : 1,
    lunghezza: 12,
  },
  {
    varietà: 'nove',
    peso : 5,
    lunghezza: 15,
  },
  {
    varietà: 'dieci',
    peso : 3,
    lunghezza: 7,
  },
]

// Primo snack------

// var somma = 0;
// for (var i = 0; i < zucchine.length; i++) {
//   somma += zucchine[i].peso;
// }
// console.log(somma);

// Secondo snack-------

var somma_1 = 0;
var somma_2 = 0;

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza <= 10) {
      somma_1 += zucchine[i].peso;
  } else {
    somma_2 += zucchine[i].peso;
  }
}
console.log('Minori di 10 cm: ' + somma_1);
console.log('Maggiori di 10 cm: ' +somma_2);
