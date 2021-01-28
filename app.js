// import functions and grab DOM elements
const form = document.querySelector('form');

// initialize state
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const player = { 
        name: formData.get('name'),
        char: formData.get('char'),
        hp: 40,
        bitcoin: 10,
        completed: {},
    };

    const stringPlayer = JSON.stringify(player);
    localStorage.setItem('PLAYER', stringPlayer);

    window.location = './spaceMap';
});
// set event listeners to update state and DOM