import React, { useContext, useEffect } from 'react'

import Player from '../assets/Player.png'
import OpponentStatus from '../components/OpponentStatus'
import CancelPlay from '../components/Buttons/CancelPlay'
import Serverconnect from '../Helpers/Socketconfig'
import { useNavigate } from 'react-router-dom'
import { Versus } from '../Helpers/AssetHelper'
import { CurrentRoom, setCurroom, setGamerId } from '../Helpers/RuntimeVars'

const Lobby = () => {
    const io = useContext(Serverconnect);
    const navigate = useNavigate();
    useEffect(() => {
        if(CurrentRoom===''){
            navigate('/')
        }
        io.on('playerfound',(payload)=>{
            setGamerId('pl1id')
            setCurroom(payload)
            navigate('/game/'+payload)
        })
    }, [io,navigate]);
    return (
        <div className='sized relative flexed'>
            <img className='w-full h-full bg-cover' src={Versus} alt="" />
            <div className='justify-around flexed absolute w-[100%] h-[100%]'>
                <div className='flex flex-col justify-center items-center h-[400px]'>
                    <img className='w-[100px] md:w-[200px]' src={Player} alt="" />
                    <p className='frisky text-2xl md:text-4xl'>Nikhil Thakur</p>
                    <p className='frisky text-2xl md:text-4xl'>Ready to Fight</p>
                </div>
                <div className='max-w-[30%] flexed flex-col'>
                    <OpponentStatus />
                    <CancelPlay/>
                </div>
            </div>
        </div>
    )
}

export default Lobby
