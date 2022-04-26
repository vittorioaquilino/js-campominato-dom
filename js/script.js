// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// [*] Al click sul bottone Play
// [*] Nascondere la scritta con classe "hidden"
// [*] Far vedere il contenitore della griglia, togliendo la classe "hidden"
// [*] Prelevare la scelta della difficoltà dell'utente, salviamo il numero delle celle all'interno della variabile cellNumber in base alla difficoltà.
// [*] Generare le celle da 1 a cellNuber. Per ogni cella: 
    // - [*] creare l'elemento html
    // - [*] aggiungere la classe "grid-item"
    // - [*] settare le dimensioni della cella corrispondente al livello;
    // - [*] inserire lo span con il numero corrispondente
    // - [*] appendere la cella generata al contenitore

// [*] Al click di una delle celle, 
    // [] se il numero della cella è presente nell' array delle bombe:
        //[] la cella si colora di rosso
        //[] stampare i numeri di tentativi 
        // [] fine gioco, utente perde
    // [] altrimenti:
        //[] la cella si colora di blu
        //[] il numero della cella si salva nell'array
        //[] se lunghezza dell'array = numero massimo di tentativi:
            //[] fine gioco, utente vince

// PREPARAZIONE GIOCO
// al click parte il gioco
const playButton = document.getElementById("start");
playButton.addEventListener("click", printGrid);

// FUNZIONE 1
/**
 * Description scelgo la difficoltà di gioco e genero i numeri da 1 a cellNumber
 * non ritorna niente
 */
function printGrid() {
    // creo la griglia
    const grid = document.getElementById("grid");
    const title = document.getElementById("title");
    // faccio vedere la griglia togliendo la classe hidden
    title.classList.add("hidden");
    grid.classList.remove("hidden");
    grid.innerHTML = "";
   
    // Prelevare la scelta della difficoltà dell'utente
    const difficulty = parseInt(document.getElementById("difficulty-level").value);
    let cellNumber;
    let cellsNuberInRow;
    if (difficulty == 1) {
        cellNumber = 100;
        cellsNuberInRow = 10;
    } else if (difficulty == 2) {
        cellNumber = 81;
        cellsNuberInRow = 9;
    } else {
        cellNumber = 49;
        cellsNuberInRow = 7;
    }

    // Generare le celle da 1 a cellNumber
    for (let i = 1; i <= cellNumber; i++) {
        // genera cella
        const newItem = generateGridItem(i, cellsNuberInRow);
        // aggiungo il handler del click
        newItem.addEventListener("click", handleCellClick);
        // appendere la cella generata al contenitore
        grid.append(newItem);
    }
}

// FUNCTION 2
/** 
 * Description La funzione che colora di blu la cella
 * Non ritorna niente
 */
 function handleCellClick() {
    this.classList.add("active");
}

// FUNCTION 3
/**
 * Description Funzione che genera un elemento (cella) html della griglia
 * @param {any} gridNumber -> un numero da inserire nella cella
 * @param {any} cellsInRow -> numero delle celle in una riga
 * @returns {any} -> elemento del DOM che rappresenta la cella della griglia
 */
function generateGridItem(gridNumber, cellsInRow) {

    //     /*
    //         <div class="grid-item">
    //             <span>1</span>
    //         </div>
    //     */

    // creo la griglia
    const gridItem = document.createElement("div");
    // aggiungere la classe "grid-item"
    gridItem.classList.add("grid-item");
    // settare le dimensioni della cella corrispondenti;
    gridItem.style.width = `calc(100% / ${cellsInRow})`;
    gridItem.style.height = `calc(100% / ${cellsInRow})`;
    // inserire lo span con il numero corrispondente
    gridItem.innerHTML = `<span>${gridNumber}</span>`

    return gridItem;
}
// numeri random
function getRndInteger() {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// FUNCTION 4
/**
 * Description genero 16 numeri random non ripetuti da inserire nell' array
 * @param {any} quantity -> la quantità di numeri nell'array 
 * @param {any} maxLimit -> il limite massimo di numeri (gridNumber)
 * @returns {any}
 */
function generateRandomNumbers (quantity, maxLimit) {
    const randomArray = [];
    while (randomArray.length < 16) {
        const randomNumber = getRdnIntegers(1, maxLimit);
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
}
