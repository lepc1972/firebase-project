/*
when you clicked aadd to cart button , what ever is writen
in the input field should be consolo logged
*/

/*
When the "Add to Cart" button is clicked, the value entered
in the input field should be logged to the console.
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
        databaseURL: "https://shopping-reminder-c8e69-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app);
const moviesInDB = ref(database, "a little bit of everything");
console.log(database)

console.log(app)

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value
        push(moviesInDB, inputValue)
        console.log(inputValue)

}

)

