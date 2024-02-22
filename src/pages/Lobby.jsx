import React from 'react'
import versus from '../assets/versus.jpg'
import Player from '../assets/Player.png'
import OpponentStatus from '../components/OpponentStatus'

const Lobby = () => {
    return (
        <div className='sized relative flexed'>
            <img className='w-full h-full bg-cover' src={versus} alt="" />
            <div className='justify-around flexed absolute w-[100%] h-[100%]'>
                <div className='flex flex-col justify-center items-center h-[400px]'>
                    <img src={Player} alt="" />
                    <p className='frisky'>Nikhil Thakur</p>
                    <p className='frisky text-xl'>Ready to Fight</p>
                    </div>
                <div className='max-w-[30%]'>
                    <OpponentStatus/>
                               </div>
            </div>
        </div>
    )
}

export default Lobby
