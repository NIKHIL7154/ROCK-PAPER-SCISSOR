import React, { useState } from 'react'
import versus from '../assets/versus.jpg'
import MoveDisplay from '../components/MoveDisplay'
import Score from '../components/Score'
import MoveSelector from '../components/MoveSelector'
const GamePage = () => {
    const [Player_move,setPlayer_move]=useState("Left_Paper");
    const [Opponent_move,setOpponent_move]=useState("Right_Scissor");
    return (


        <div className='sized relative flexed'>
            <img className='w-full h-full bg-cover' src={versus} alt="" />
            <div className='absolute w-[100%] h-[100%]'>
                <div className='w-full h-[15%]'>
                    <Score/>
                </div>
                <div className='flexed w-full h-[65%] bg-[#73ff7f8f]'>
                        <MoveDisplay image_to_show={Player_move} align={'start'}/>

                        <MoveDisplay image_to_show={Opponent_move} align={"end"}/>
                </div>
                <div className='w-full h-[20%] bg-[#7394ff8f]'>
                    <MoveSelector Select_Move={setPlayer_move}/>
                </div>
            </div>
        </div>
    )
}

export default GamePage
