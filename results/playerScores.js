export function scoreHp(hp) {
    if (hp < -100) {
        return 'zapped';
    }
    if (hp > -100 && hp < 50) {
        return 'ok';
    }
    return 'super';
}


export function scoreBitcoin(bitcoin) {
    if (bitcoin < -50) {
        return 'zapped';
    }
    if (bitcoin > -20 && bitcoin < 100) {
        return 'ok';
    }
    return 'super';
}
