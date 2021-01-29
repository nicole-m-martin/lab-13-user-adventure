export function playerScore(choice, quest) {
    const player = JSON.parse(localStorage.getItem('PLAYER'));
    player.hp = player.hp + choice.hp;
    player.bitcoin = player.bitcoin + choice.bitcoin;
    player.complete[quest.id] = true;
    localStorage.setItem(JSON.stringify(player));
}