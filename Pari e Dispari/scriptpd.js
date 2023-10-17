const gioca = document.getElementById("gioca");

gioca.addEventListener("click", function () {
  const sceltaUtente = document.getElementById("sceltaUtente").value.toUpperCase();
  const numeroUtente = parseInt(document.getElementById("numeroUtente").value);
  const numeroComputer = Math.floor(Math.random() * 5) + 1;
  const somma = numeroUtente + numeroComputer;
  const risultato = somma % 2 === 0 ? 'P' : 'D';
  let messaggio = "Il computer ha scelto il numero " + numeroComputer + ". ";
  messaggio += "La somma dei due numeri è " + somma + ". ";

  if (sceltaUtente !== 'P' && sceltaUtente !== 'D') {
      messaggio += "Scelta non valida. Scegli 'P' per pari o 'D' per dispari.";
  } else if (numeroUtente < 1 || numeroUtente > 5) {
      messaggio += "Numero non valido. Inserisci un numero compreso tra 1 e 5.";
  } else if (risultato === sceltaUtente) {
      messaggio += "Complimenti! Hai vinto!";
  } else {
      messaggio += "Mi dispiace, il computer ha vinto.";
  }

  document.getElementById("risultatoDadi").textContent = messaggio;
})