'use strict'

import {users, currentUser} from './users.js';
import innerHtml from './innerHtml.js';

// document.getElementById('output').innerHTML = users[currentUser].name;
innerHtml('output', users[currentUser].email);