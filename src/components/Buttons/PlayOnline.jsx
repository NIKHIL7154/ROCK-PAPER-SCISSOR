import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Serverconnect from '../../Helpers/Socketconfig';
import { initroom } from '../../Helpers/RoomRequests';
import { setCurroom, setGamerId } from '../../Helpers/RuntimeVars';
const PlayOnline = () => {
    const io = useContext(Serverconnect);
    const navigate = useNavigate();
    const handlePlayOnline = () => {
        async function Roomcreate(){
            const data = await initroom();
            if (data.check === 'found') {
                let room = data.key
                io.emit('jointheroom',{key:room,type:'pub'})
                setGamerId('pl2id')
                setCurroom(data.key)
                navigate("/game/"+data.key)
            } else {
                io.emit('newroom',data.key)
                setCurroom(data.key)
                navigate("/lobby/online")
            }
        }
        Roomcreate();
    }
    return (
        <button onClick={handlePlayOnline} className='dance_anim py-2 my-4 uibtn frisky'>Play Online</button>
    )
}

export default PlayOnline
