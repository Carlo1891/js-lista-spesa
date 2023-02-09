// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

const groceryList = [
    'pane',
    'latte',
    'uova',
    'farina',
    'burro'
];

console.log (groceryList);

let i = 0;

while (i < groceryList.length){
    const groceryElement = document.createElement ('li');
    groceryElement.innerHTML = groceryList [i];
    document.getElementById ('grocery-list').append (groceryElement);
    i++;
}






