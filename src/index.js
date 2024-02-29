import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Serverconnect from './Helpers/Socketconfig';
import io from 'socket.io-client'
import Bypass from './pages/Bypass'


const soc = io.connect("https://rockservers.vercel.app");


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Serverconnect.Provider value={soc}>
        <Bypass/>
    </Serverconnect.Provider>



);



