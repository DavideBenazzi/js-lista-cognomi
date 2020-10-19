/*
Lista Cognomi
Chiedere all'utente il cognome
inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/
var user = prompt('Qual\'è il tuo cognome?').trim();

var cognome = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
console.log(cognome);

var lista = ['Bianchi' , 'Rossi' , 'Duzioni' , 'Balsano' , 'Giorgini'];

lista.push(cognome);

console.log( lista.sort() );
console.log( lista.indexOf(cognome) + 1 );
