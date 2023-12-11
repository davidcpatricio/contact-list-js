import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contact from './modules/Contact';

const register = new Login('.form-register');
const login = new Login('.form-login');
register.init();
login.init();

const create = new Contact('.form-create');
const update = new Contact('.form-update');
create.init();
update.init();

// import './assets/css/style.css';
