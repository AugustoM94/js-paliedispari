 //utility
  const parolaInput = document.getElementById("parolaInput");
  const verifica = document.getElementById("verifica");
  const risultato = document.getElementById("risultato");

 verifica.addEventListener("click", function () {
  //variabili

    const parola = parolaInput.value.toUpperCase();    
    let isPalindromo = true;
//ciclo for 

    for (let i = 0; i < parola.length / 2; i++) {
      console.log(parola)
      if (parola[i] !== parola[parola.length - 1 - i]) {
        isPalindromo = false;
      }
    }

    if (isPalindromo) {
      risultato.textContent = "La parola è un palindromo";
    } else {
      risultato.textContent = "La parola non è un palindromo";
    }
  });

