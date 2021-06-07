import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import App from './components/App'
const container = document.getElementById('app');

ReactDOM.render(<App
    firstName='Sebastian'
    lastName='Navarrete'
    avatarUrl='https://i.pinimg.com/originals/6c/2e/07/6c2e07660c6fcf90d6a362ced622e1ad.png'
    jobTitle='FullStack'
    twiter='@Sebastian519'
/>, container);
