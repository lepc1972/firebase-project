/*
when you clicked aadd to cart button , what ever is writen
in the input field should be consolo logged
*/

/*
When the "Add to Cart" button is clicked, the value entered
in the input field should be logged to the console.
*/

// Get references to the input field and button
const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value
        console.log(inputValue)

}

)

