const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

// Set Date input Min with Today`s Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log(distance);
}

let countdownTitle = '';
let countdownDate = '';

//Take Values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    
    // get number version of current Date, updateDOm
    countdownValue = new Date(countdownDate).getTime();

    updateDOM();
}

// Event listeners
countdownForm.addEventListener('submit', updateCountdown);

