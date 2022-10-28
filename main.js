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