// Opération asynchrone
function operationAsynchrone() {
    console.log("Début de l'opération asynchrone");
    setTimeout(function() {
        console.log("Opération asynchrone en cours...");
        console.log("Fin de l'opération asynchrone");
    }, 7000); // Délai de 2 secondes
}

// Appel de l'opération asynchrone
console.log("Avant l'appel de l'opération asynchrone");
operationAsynchrone();
console.log("Après l'appel de l'opération asynchrone");

