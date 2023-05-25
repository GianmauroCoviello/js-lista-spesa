// ARRAY
let ingredienti= ['Orecchiette casereccie', 'Salsa di pomodoro','Salsiccia di cavallo', 'Parmigiano reggiano DOP', 'Basilico','sale','olio','acqua']

// VARIABILE CHE INDICA LA LISTA NEL DOM
let listaSpesa = document.getElementById('shopping-list')

// CICLO WHILE
let i = 0

while (i < ingredienti.length) {
    // VARIABILE CHE CONTIENE LA L'ARRAY NEL CICLO WHILE
    let listItem = ingredienti[i]
    // VARIABILE CHE INNIETTA NEL DOM GLI ELEMENTI "LI"
    listItem =  `<li>${listItem}</li> `
    // VARIABILE CHE INNIETTA NEL DOM GLI ELEMENTI "LI"
    listaSpesa.innerHTML += listItem
    // CHIUSURA DEL CICLO
    i++
           
}



