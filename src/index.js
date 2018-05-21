import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const tanggalHariIni = () => {
    const date = new Date();
    return date.toDateString();
}

const greeting = <h1>Halo Wibu Tanggal hari ini : {tanggalHariIni()}</h1>
ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
