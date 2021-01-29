import { savePlayer } from './utils.js';


const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    savePlayer ({ 
        name: formData.get('name'),
        char: formData.get('char'),
        hp: 40,
        bitcoin: 20,
        completed: {},
    });

    window.location = './spaceMap';
});

