import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Serverconnect from './Helpers/Socketconfig';
import io from 'socket.io-client'

import App from './App';


const soc = io.connect("https://rockserver.adaptable.app");


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Serverconnect.Provider value={soc}>
        <App/>
    </Serverconnect.Provider>



);



