import React, { useState } from 'react'

const OpponentStatus = () => {
    const [gameType,setgametype]=useState(false)
    return (
        <div>
            {gameType?<div className='w-[400px] h-[400px] bg-[#ffffff42] rounded-3xl flexed flex-col justify-evenly'>
                <p className='frisky'>Room Id:</p>
                <div className='bg-[#fff460b1] rounded-3xl p-2'><p className='frisky text-2xl'>https://rockpapers...</p></div>
                <button className='uibtn frisky m-3'>Click to copy</button>
                <p className='frisky text-3xl'>Copy the above link and send it to friend to start the game.</p>
            </div>
            :<p className='frisky'>Waiting for Opponent to join...</p>}
        </div>
    )
}

export default OpponentStatus
