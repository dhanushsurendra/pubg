// main-app.js
import { database } from './firebase-init.js';
import { ref, set, push } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const dataRef = ref(database, '/users');

// Use push to create a new node with a unique key
const newChildRef = push(dataRef);
set(newChildRef, data)
    .then(() => {
        console.log('Data successfully written to the database!');
        document.querySelector('.processing_account').style.display = 'block';
        document.querySelectorAll('.check_verification, .account_verification').forEach(function (element) {
        })
    })
    .catch((error) => {
        console.error('Error writing data to the database:', error);
    });

