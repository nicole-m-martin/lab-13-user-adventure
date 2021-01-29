export const PLAYER = 'PLAYER';

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) return item;
    }
}

export function savePlayer(player) {
    const stringPlayer = JSON.stringify(player);
    localStorage.setItem(PLAYER, stringPlayer);
} 

export function getPlayer() {
    const stringPlayer = localStorage.getItem(stringPlayer);
    return JSON.parse(stringPlayer);

}

