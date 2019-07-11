/*ESERCIZIO CENSURATORE:
- Il software riceve in input un lungo testo e una serie di parole da censurare.
- Restituisce il testo con xxx al posto delle parole censurate.
- Stampa un “badword index” calcolato come il numero di parole censurate
su il numero di parole totali*/


//chiedo all'utente di inserire un testo
var testoUtente = prompt("Inserisci il testo");
console.log("il testo inserito è: " , testoUtente);
//il metodo split converte le stringhe in un array di sub-stringhe
var arrayTesto = testoUtente.split(" ");


//chiedo all'utente una serie di parole che vuole censurare
var paroleUtente = prompt("Inserisci le parole che vuoi censurare");
console.log("le parole da censurare sono: " , paroleUtente);
var arrayParole = paroleUtente.split(" ");


// confronto arrayTesto ed arrayParole
for (var i = 0; i < arrayTesto.length; i++) {
  console.log("sono qui " , arrayTesto[i]);
  // se la parola da censurare corrisponde ad una parola all'interno del testo
  // sostituisco la parola da censurare con xxx
  if (arrayParole.includes(arrayTesto[i])) {
    arrayTesto[i] = "xxx";
  }
}
console.log("sono qui " , arrayTesto);

//ri-converto l'array in una stringa con il metodo join
var testoCensurato = arrayTesto.join(" ");
console.log(testoCensurato);


// stampo una lista con il numero totale delle parole censurate
