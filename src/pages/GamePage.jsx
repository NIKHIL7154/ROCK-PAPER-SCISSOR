import React, { useContext, useEffect, useState } from 'react'
import MoveDisplay from '../components/MoveDisplay'
import Score from '../components/Score'
import MoveSelector from '../components/MoveSelector'
import { Versus } from '../Helpers/AssetHelper'
import { useNavigate, useParams } from 'react-router-dom'
import Serverconnect from '../Helpers/Socketconfig'
import {checkforroom} from '../Helpers/RoomRequests'
import GameLogic from '../components/GameLogic'
import { CurrentRoom, setCurroom, setGamerId } from '../Helpers/RuntimeVars'

const GamePage = () => {
    const io = useContext(Serverconnect)
    let linkid=useParams().roomid;
    const navigate = useNavigate();
    const [Result,setResult] = useState('not')
    useEffect(() => {
        async function Validator(){
            if(CurrentRoom!==linkid){
                const status = await checkforroom(linkid)
                if(status==='Found'){
                    io.emit('jointheroom',{key:linkid,type:'pvt'})
                    setCurroom(linkid)
                    setGamerId('pl2id')
                }else{
                    navigate('/home')
                }
            }
        }
        Validator()
    }, [linkid,io,navigate]);
    return (
        <div className='sized relative flexed'>
            {Result==='not'?<></>:
            <img className='absolute mox:top-[20%] z-20 mox:w-[40%] w-[20%]' src={Result} alt="Winner" />} {/* Result here */}
            <img className='w-full h-full bg-cover' src={Versus} alt="" />
            <div className='absolute z-10 w-[100%] h-[100%]'>
                <div className='w-full h-[15%]'>
                    <Score/>
                </div>
                <div className='flexed w-full h-[65%]'>
                        <MoveDisplay />
                </div>
                <div className='w-full h-[20%]'>
                    <MoveSelector/>
                    <GameLogic res={setResult}/>
                </div>
            </div>
        </div>
    )
}

export default GamePage
