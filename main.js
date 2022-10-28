// throw exception instead of silent errors.
'use strict'

// only 'var' in root is assigned to window global variable, but let and const cannot be added
var name = 'Muath';

function init() {
    if (true) {
        // var global block
        var email = 'muath@example.com';
        // let local block
        let email = 'muath@example.com';
    }
    document.getElementById('output').innerHTML = email;
}

init();