import quests from '../data.js';
import { findById } from '../utils.js';




const h1 = document.querySelector('h1');
const h5 = document.querySelector('h5');
const form = document.querySelector('form');
const image = document.querySelector('section img');
const mapButton = document.querySelector('#map-btn');
const answer = document.querySelector('#results-span');



const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const quest = findById(quests, id);

h1.textContent = quest.title;
h5.textContent = quest.description;
image.src = `../images/${quest.image}`;


for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');
    

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
  
    form.append(label);
    label.append(radio, span);
    
}

const button = document.createElement('button');
button.textContent = 'Go!';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choices');
    const choice = findById(quest.choices, choiceId);
    
    const player = JSON.parse(localStorage.getItem('PLAYER'));

    answer.textContent = choice.result;

    player.completed[quest.id] = true;
    localStorage.setItem('PLAYER', JSON.stringify(player));

    player.bitcoin += choice.bitcoin;
    player.hp += choice.hp;
    
}); 



mapButton.addEventListener('click', () => {
    window.location = '../spaceMap';
});














    
    















