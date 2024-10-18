const guesses = document.createElement("div"); 
let nums = []; 
for (let i = 1; i <= 100; i++) {
    let guess = document.createElement('div');
    guess.innerHTML = i; 
    guess.setAttribute('class', 'guess')
    guesses.appendChild(guess);
}
guesses.setAttribute('class', 'guesses');

const app = document.getElementById('app');
app.appendChild(guesses);
