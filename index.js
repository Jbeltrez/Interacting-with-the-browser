const guesses = document.createElement("div");
const originalHTML = document.querySelector('#app').innerHTML;
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
let nums = []; 
for (let i = 1; i <= 100; i++) {
    let guess = document.createElement('div');
    guess.innerHTML = i; 
    guess.setAttribute('class', `guess guess-${i}`)
    guesses.appendChild(guess);
}
guesses.setAttribute('class', 'guesses');
instructions = document.querySelector('.instructions')

const app = document.getElementById('app');
app.appendChild(guesses);
const guess = document.getElementsByClassName("guess");
console.log(guess)

beginButton = document.querySelector(".begin-btn")
// let p
beginButton.addEventListener('click', () => {
    let target = getRandomIntInclusive(1, 100);
    console.log(target); 
    let p = prompt("Enter a number here")
    while (p != target ) {
         console.log(target);
         const remainingGuesses = document.querySelector(".remaining-guesses")
         console.log(typeof(remainingGuesses))
         const wrongGuess = document.querySelector(`.guess-${p}`)
         wrongGuess.style.backgroundColor = "red";     
         console.log(wrongGuess);
        //  wrongGuess.style.backgroundColor = "red";
        //  remainingGuesses.innerHTML --; 
        p = prompt("INCORRECT! Try Again!")
    }
    if (p == target) {
        instructions.innerHTML = '<h1 class="congrats" style="display:flex"> You WON!!!! </h1><h2> Refresh the page to play again</h2>'
        // const resetButton = document.createElement('button');
        // resetButton.innerHTML = "new game"
        // beginButton.setAttribute('class', 'reset-button');
        beginButton.remove();
        const resetButton = document.createElement('button');
        resetButton.setAttribute('class', 'reset-button');
        // resetButton = document.querySelector('reset-button'); 

        console.log(resetButton);
        resetButton.addEventListener('click', () => {
            document.querySelector('#app').innerHTML = originalHTML
        })
        // resetButton.innerHTML
        // beginButton.remove()
        // document.querySelector('instructions').appendChild(resetButton);

        

    }
})


