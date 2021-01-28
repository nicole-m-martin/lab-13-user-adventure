import quests from '../data.js';

const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('PLAYER'));

let allQuestsDone = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        allQuestsDone = false;
    }
}

if (user.hp <= 0 || allQuestsDone) {
    window.location = '../results';
}

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
  
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}