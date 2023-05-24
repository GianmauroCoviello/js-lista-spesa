// ARRAY
let ingredienti= ['Orecchiette casereccie', 'Salsa di pomodoro','Salsiccia di cavallo', 'Parmigiano reggiano DOP', 'Basilico']

// VARIABILE CHE INDICA LA LISTA NEL DOM
let listaSpesa = document.getElementById('shopping-ingredients')

// CICLO WHILE
let ricetta = 0

while (ricetta < ingredienti.length) {
    // VARIABILE CHE CONTIENE LA L'ARRAY NEL CICLO WHILE
    let listItem = ingredienti[ricetta]
    // VARIABILE CHE INNIETTA NEL DOM GLI ELEMENTI "LI"
    listItem =  `<li>${listItem}</li> `
    // VARIABILE CHE INNIETTA NEL DOM GLI ELEMENTI "LI"
    listaSpesa.innerHTML += listItem
    // CHIUSURA DEL CICLO
    ricetta++
           
}



