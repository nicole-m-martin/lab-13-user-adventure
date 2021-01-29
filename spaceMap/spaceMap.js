import quests from '../data.js';
import { getPlayer, PLAYER } from '../utils.js';

const ul = document.querySelector('ul');

let allQuestsDone = true;


for (let quest of quests) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('quest');
  
    link.textContent = quest.title;      
    link.href = `../quest/?id=${quest.id}`;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.style.textContent = quest.title;

    li.append(link);
    ul.append(li);
}

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        allQuestsDone = false;
    }
}

if (user.hp <= 0 || allQuestsDone) {
    window.location = '../results';
}