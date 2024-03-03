import React, { useContext, useEffect, useState } from 'react'

import GamePage from './GamePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameEnd from './GameEnd';
import Homepage from './Homepage';
import Lobby from './Lobby';
import { GameData, Opponentturn, Playerturn } from '../Helpers/Contexts';
import { Gamestarted } from '../Helpers/Contexts';
import LoadData from './LoadData';

import FriendPlay from './FriendPlay';
import Serverconnect from '../Helpers/Socketconfig';
import { CurrentRoom } from '../Helpers/RuntimeVars';


const Bypass = () => {
    const [Gamebegin, setGamebegin] = useState(false)
    const [Player_move, setPlayer_move] = useState("Left_Rock");
    const [game, setgame] = useState(false);
    const [Opponent_move, setOpponent_move] = useState("Right_Rock");
    const io = useContext(Serverconnect);
    useEffect(() => {
        io.on('connect',()=>{
            if(CurrentRoom!==''){
                io.emit('newroom',CurrentRoom)
                console.log("Connected with server");
            }
        })
        io.on('disconnect',()=>{
            if(CurrentRoom!==''){
                io.emit('newroom',CurrentRoom)
                console.log("disconnected from server");
            }
        })
    }, [io]);
    return (

        <Gamestarted.Provider value={[Gamebegin, setGamebegin]}>
            <Playerturn.Provider value={[Player_move, setPlayer_move]}>
                <Opponentturn.Provider value={[Opponent_move, setOpponent_move]}>
                    <GameData.Provider value={[game, setgame]}>
                        <BrowserRouter>

                            <Routes>
                                <Route path='/home' element={<Homepage />} />
                                <Route path='*' element={<LoadData />} />
                                <Route path='/playwithfriend' element={<FriendPlay/>} />
                                <Route path='/game/:roomid' element={<GamePage />} />
                                <Route path='/result/:result' element={<GameEnd />} />
                                <Route path='/lobby/:gametype' element={<Lobby />} />
                            </Routes>
                        </BrowserRouter>
                    </GameData.Provider>
                </Opponentturn.Provider>
            </Playerturn.Provider>


        </Gamestarted.Provider>
    )
}

export default Bypass
