const gioca = document.getElementById("gioca");

gioca.addEventListener("click", function () {
  const sceltaUtente = document.getElementById("sceltaUtente").value.toUpperCase();
  const numeroUtente = parseInt(document.getElementById("numeroUtente").value);
  const numeroComputer = Math.floor(Math.random() * 5) + 1;
  const somma = numeroUtente + numeroComputer;
})