// Basket
// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere
// maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per da 3 punti
// Una volta generato il “database”, il programma deve chiedere
// all’utente di inserire un Codice Giocatore e il programma
// restituisce le statistiche.


function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}

function code_generator() {
  var letters = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(letters[random_int_number(0, letters.length - 1)])
  }
  for (var i = 3; i < 6; i++) {
    arr.push(numbers[random_int_number(0, numbers.length - 1)])
  }
  // console.log(arr);
  var str = arr.join('')
  // console.log(str);
  return str
}

function cifre_decimali(x) {
  return Number.parseFloat(x).toFixed(2);
}

var giocatori = [
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
  {
    'codice' : '',
    punti : 0,
    rimbalzi : 0,
    falli : 0,
    perc_tiri2 : 0,
    perc_tiri3 : 0,
  },
];


for (var i = 0; i < giocatori.length; i++) {
  var gioc = giocatori[i];
  gioc.codice = code_generator();
  gioc.punti = random_int_number(0, 60);
  gioc.rimbalzi = random_int_number(0, 50);
  gioc.falli = random_int_number(0, 20);


  var tiri2 = (gioc.punti - random_int_number(0, gioc.punti)) / 2;
  var tiri3 = (gioc.punti - tiri2*2) / 3;
  gioc.perc_tiri2 = cifre_decimali((tiri2/(gioc.punti/2)) * 100) + '%';
  gioc.perc_tiri3 = cifre_decimali((tiri3/(gioc.punti/3)) * 100) + '%';


  console.log(tiri2 + ' tiri2, ' + i);
  console.log(tiri3 + ' tiri3, ' + i);
  console.log(gioc.perc_tiri2 + ' % tiri2, ' + i);
  console.log(gioc.perc_tiri3 + ' % tiri3, ' + i);


}

console.log(giocatori);

// document.getElementById('text').innerHTML = giocatori[0];


var code = prompt('Inserisci il codice giocatore')
var scelto = []
for (var i = 0; i < giocatori.length; i++) {
  var gioc = giocatori[i];
  if (code == gioc['codice']) {
    // domanda: perche se qua sopra inverto la disuguaglianza non funziona?perche il doppio uguale?
    // scelto.push(gioc)
    console.log(gioc);
  }
}
// console.log(scelto);
