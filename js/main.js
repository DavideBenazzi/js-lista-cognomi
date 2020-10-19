/*
Lista Cognomi
Chiedere all'utente il cognome
inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/
var user = prompt('Qual\'è il tuo cognome?').trim();
primaLettera = user.charAt(0);

maiuscolo = primaLettera.toUpperCase();

nuovoUser = user.replace( primaLettera , maiuscolo );


var lista = ['Bianchi' , 'Rossi' , 'Duzioni' , 'Balsano' , 'Giorgini'];

lista.push(nuovoUser);

console.log( lista.sort() );
console.log( lista.indexOf(nuovoUser) + 1 );
