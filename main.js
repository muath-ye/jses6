// throw exception instead of silent errors.
'use strict'

let users = [
    {
        name: 'Muath',
        email: 'muath@example.coom',
    },
    {
        name: 'Ahmed',
        email: 'ahmed@example.coom',
    }
];

let names = [];

// users.forEach(function(user){
//     names.push(user.name);
// });

users.forEach(user => names.push(user.name));

document.getElementById('output').innerHTML = names.join(', ');

// callback function should not be arrow in this case because the 'this' object will equal to 'window'
document.getElementById('btn').addEventListener('click', function() {
    // 'this' is defined for block scope
    console.log(this); // <button id="btn">Click Me</button>

    // function getDetails() {
    //     console.log(this); // undefined
    //     return `Click button ${this.getAttribute('id')}`;
    // }
    
    // arrow function passes parent block variables , in this case the 'this' object will be passed
    const getDetails = () => {
        console.log(this); // undefined
        return `Click button ${this.getAttribute('id')}`;
    }

    document.getElementById('output').innerHTML = getDetails();
});

// callback function can be arrow function if you pass a variable to be the object for the block
document.getElementById('btn').addEventListener('click', (event) => {
    // 'this' will be in this case event.currentTarget
    console.log(event.currentTarget); // <button id="btn">Click Me</button>
    
    // you don't need block and return if you will return one line
    const getDetails = () => `Click button ${event.currentTarget.getAttribute('id')}`;

    document.getElementById('output').innerHTML = getDetails();
});

