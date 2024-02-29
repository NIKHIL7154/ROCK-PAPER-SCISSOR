import React from 'react'
import { useParams } from 'react-router-dom';
import { CurrentRoom } from '../Helpers/RuntimeVars';

const OpponentStatus = () => {
    const gameType= useParams().gametype
    const handleCopy = ()=>{
        navigator.clipboard.writeText("http://localhost:3000/game/"+CurrentRoom);
    }
    return (
        <div className='overflow-hidden'>
            {gameType==='friend'?<div className='mox:w-[200px] w-[500px] h-[400px] mox:h-[300px] bg-[#ffffff42] rounded-3xl flexed flex-col justify-evenly'>
                <p className='frisky mox:text-2xl'>Room Id:</p>
                <p className='frisky text-3xl'>{CurrentRoom}</p>
                <div className='bg-[#fff460b1] rounded-3xl p-2'><p className='mox:text-sm text-2xl'>http://localhost:3000/.....</p></div>
                <button onClick={handleCopy} className='uibtn  frisky mox:text-xl mox:w-[150px] mox:m-0 m-3'>Click to copy</button>
                <p className='frisky mox:text-xl text-3xl'>Copy the above link and send it to friend to start the game.</p>
            </div>
            :<p className='frisky text-2xl md:text-5xl'>Waiting for Opponent to join...</p>}
        </div>
    )
}

export default OpponentStatus
