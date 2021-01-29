export const PLAYER = 'PLAYER';

export function savePlayer(player) {
    const stringPlayer = JSON.stringify(player);
    localStorage.setItem(PLAYER, stringPlayer);
} 

export function getPlayer() {
    const stringPlayer = JSON.parse(stringPlayer);
    return JSON.parse(stringPlayer);

}