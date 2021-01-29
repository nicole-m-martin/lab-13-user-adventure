import { scoreHp, scoreBitcoin } from './playerScores.js';
import { aliveSpaceEndings, deadSpaceEndings } from './storyEndings.js';

const player = JSON.parse(localStorage.getItem('PLAYER'));

const showEndings = document.getElementById('results-show');

const hpResult = scoreHp(player.hp);
const btResult = scoreBitcoin(player.bitcoin);

const hpMessages = {
    zapped: 'You died in space travel and probably will not be remembered..',
    ok: 'You did ok as a space traveler',
    super: 'You are a hero to the galaxy',
};

const hpMessage = hpMessages[hpResult];
let btMessages = null;

if (hpResult === 'zapped') {
    btMessages = deadSpaceEndings;
} else {
    btMessages = aliveSpaceEndings;
}
const btMessage = btMessages[btResult];

const ending = `After traveling the Galaxy far and wide, ${player.name} , you get to  ${hpMessage}. ${btMessage}.`;

showEndings.textContent = ending;

const startOver = document.querySelector('start-over');

startOver.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});
