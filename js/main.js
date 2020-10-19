/*
Lista Cognomi
Chiedere all'utente il cognome
inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/
var user = prompt('Qual\'è il tuo cognome?').trim();
// TRASFORMO LA PRIMA LETTERA IN MAIUSCOLA
var cognome = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
// LISTA COGNOMI
var lista = ['Bianchi' , 'Rossi' , 'Duzioni' , 'Balsano' , 'Giorgini'];
// AGGIUNGO IL COGNOME ALLA LISTA
lista.push(cognome);
// LISTA COGNOMI AGGIORNATA
document.getElementById('risultato').innerHTML = lista.sort();
// POSIZIONE NELLA LISTA
document.getElementById('posizione').innerHTML = 'Il tuo cognome si trova nella posizione ' + (lista.indexOf(cognome) + 1) + ' della lista.';
