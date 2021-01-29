import quests from '../data.js';
import { getPlayer, PLAYER } from '../utils.js';

const ul = document.querySelector('ul');


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

const player = getPlayer(PLAYER);


function playerFinishedQuests(player) {
    for (let quest of quests) {
        if (!player.completed[quest.id]) {
            return false;
        }
    }
    return true;
} 


if (player.hp <= 0 || playerFinishedQuests(player)) {
    window.location = '../results';
} 