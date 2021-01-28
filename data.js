

const planet = {
    id: 'planet',
    title: 'Planet Zargar',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'planet.png',
    description: `
      You land on Planet Zargar and see a body of neon pink water to the west, bright green mountains to the east, and a dark purple valley to the north.....where do you go?`,
    choices: [{
        id: 'water',
        description: 'Go to the water',
        result: `
          You are thirsty so you fill all your canteens up with the neon pink liquid...as you take a drink you start to get dizzy. Should of tested the water before drinking...it was poison and you die. FAIL.
      `,
        hp: -50,
        bitcoin: 0, 
    }, {
        id: 'mountains',
        description: 'Go to the green mountains',
        result: `
          As you climb up, you find another ship crashed on the side of the bright green mountain. Inside there is no crew in sight, but you find abandoned cargo boxes. You open them and find 100 bitcoins and rations. Score!! 
      `,
        hp: 25,
        bitcoin: 50,
    }, {
        id: 'valley',
        description: 'Go to the purple valley',
        result: `
          As you head to the valley you see small blue aliens that look friendly, but hungry. You say hello and offer them some food. They take it gladly and trade you with 50 bitcoins. You say goodbye and head back to your ship.`,
        hp: -10,
        bitcoin: 50,
    }]
};

const enemy = {
    id: 'enemy',
    title: 'Encounter enemy fleet of ships',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'enemy-fleet.png',
    description: `
      Flying through space to collect space junk, you see a fleet of ships in the distance...as they get closer you realize it's your mortal enemy....The Zinertax. They notice you, lock in on your ship and raise their weapons...what do you do next?`,
    choices: [{
        id: 'escape',
        description: 'Kick it into hyper-drive and run',
        result: `
          You see that they have bigger guns on their warship than you, so you flip on hyper-drive to escape....but it's too late! They lock on your ship and blast you into a million pieces. You die. FAIL! `,
        hp: -55,
        bitcoin: 0
    }, {
        id: 'shoot',
        description: 'You charge your ships lazer guns and fire!',
        result: `
          You lock targets on the largest ship and start firing your lazers. They shoot back and your ship get damaged and lose 20hp but...just in time you raise your shields and protect your ship from more damage. You bring out the big cannon guns and blast the main ship to pieces, the other ships retreat and you get away. 
      `,
        hp: -20,
        bitcoin: 0
    }, 
    {
        id: 'communicate',
        description: 'Send a com message to the main ship',
        result: `
          You send a peaceful message to the main ship, and they respond with a threat. Leave now and give them 30 bitcoins or they will fire. You agree and send over the money. After that you kick it into hyper-drive and get out of there.
      `,
        hp: 0,
        bitcoin: -30,
    }]
};

const asteroid = {
    id: 'asteroid',
    title: 'A large asteroid!',
    map: {
        top: '31%',
        left: '5%'
    }, 
    image: 'asteroid.png',
    description: `
      Flying through space you see a large asteroid zooming towards you...what do you do?`,
    choices: [{
        id: 'blast',
        description: 'Fire lazer torpedoes',
        result: 'You charge up all your lazer torpedoes and shoot them at the asteroid. You hit it and it shatters into a million pieces......but some of the pieces hit your ship and you lose 25 hp from the damage',
        hp: -25,
        bitcoin: 0
    }, {
        id: 'flyAway',
        description: 'Hyper-drive away from it',
        result: 'You kick in hyper-drive and try to out run the asteroid. Lucky you....you got away this time, but as you speed away you lose some cargo with 100 bitcoins inside. Bummer!',
        hp: 0,
        bitcoin: -100,
    }, {
        id: 'drones',
        description: 'Net the asteroid with drones',
        result: 'You see it is heading towards a small planet with harmless dog-like aliens called the Requix that live there. Quickly you call your drones, capture the asteroid in a large net, and fly into another dimension. The Requix are so grateful they send you 100 bitcoins and food rations. Good job hero!',
        hp: 45,
        bitcoin: 100,
    }]
};

const quests = [
    planet, 
    enemy,
    asteroid,
];

export default quests;
