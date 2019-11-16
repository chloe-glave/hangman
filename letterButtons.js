// Scripts to handle the letter buttons.

// Dynamically generate between 0 and 26 buttons with letters of the alphabet.
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generateButtons() {
    for (let i = 0; i < letters.length; i++) {
        let btn = document.createElement("BUTTON"); // create a new HTML button element within JS script
        let currentLetter = letters[i];

        document.body.appendChild(btn); // display it on the page
        btn.innerHTML = currentLetter;
        btn.onclick = function () {window.alert("Placeholder function. Button should react according to whether the" +
            " letter is in the word.")}
    }
}

generateButtons();