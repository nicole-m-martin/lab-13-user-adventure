import { findById } from '../app.js';
import quests from '../data.js';


const h1 = document.querySelector('h1');
const image = document.querySelector('section img');
const h5 = document.querySelector('h5');
const form = document.querySelector('form');
const mapButton = document.querySelector('#map-btn');
const resultsSpan = document.querySelector('#results-span');
// const results = document.querySelector('#results');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
// if (!quest) {
//     window.location = '../spaceMap';
// }

const quest = findById(quests, questId);

h1.textContent = quest.title;
h5.textContent = quest.description;
image.src = `../images/${quest.image}`;

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');
    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = 'choice.id';
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Go!';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const spaceData = new FormData(form);
    const clickedId = spaceData.get('choices');
    const choice = findById(quest.choices, clickedId);
    resultsSpan.textContent = choice.result;

});          













    // playerScore(choice);


// function playerScore(choice, quest) {
//     const player = JSON.parse(localStorage.getItem('PLAYER'));
//     player.hp = player.hp + choice.hp;
//     player.bitcoin = player.bitcoin + choice.bitcoin;
//     player.complete[quest.id] = true;
//     localStorage.setItem(JSON.stringify(player));
// }

    
    



    // window.location = '../spaceMap/index.html';













