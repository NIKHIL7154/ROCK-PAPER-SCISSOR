import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Serverconnect from './Helpers/Socketconfig';
import io from 'socket.io-client'

import App from './App';

const Host=process.env.REACT_APP_META_SERVER_URI

const soc = io.connect(Host);


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Serverconnect.Provider value={soc}>
        <App/>
    </Serverconnect.Provider>



);



