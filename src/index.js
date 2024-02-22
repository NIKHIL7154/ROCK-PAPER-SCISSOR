import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
//import App from './App';
import Serverconnect from './Helpers/Socketconfig';
//import io from 'socket.io-client'
//import Homepage from './pages/Homepage';

import Bypass from './pages/Bypass';
//const soc = io.connect("http://localhost:8000");


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Serverconnect.Provider value={"kj"}>
        <Bypass/>
        
    </Serverconnect.Provider>



);



