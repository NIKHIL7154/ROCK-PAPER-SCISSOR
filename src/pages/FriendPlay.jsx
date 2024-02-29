import React, { useContext, useRef } from 'react'
import { checkforroom, createPrivateRoom } from '../Helpers/RoomRequests';
import { useNavigate } from 'react-router-dom';
import CancelPlay from '../components/Buttons/CancelPlay';
import { setCurroom } from '../Helpers/RuntimeVars';
import Serverconnect from '../Helpers/Socketconfig';

const FriendPlay = () => {
    const io = useContext(Serverconnect);
    const navigate = useNavigate();
    const Idref = useRef();
    const handleJoinRoom = async () => {
        let textid = Idref.current.value;
        if (textid === '' || textid.length < 6) {
            alert("Enter Valid")
        } else {
            const status = await checkforroom(textid)
            if (status === 'Found') {
                navigate('/game/' + textid)
            } else {
                alert('Not found baby')
            }
        }

    }

    const handleCreateRoom =  async () => {
        const response=await createPrivateRoom();
        let roomid=response.key
        setCurroom(roomid)
        io.emit('newroom',roomid)
        navigate("/lobby/friend")
    }
    return (
        <div className='sized flexed bg-[#ff4848]'>
            <div className='w-[400px] h-[500px] bg-[#ffffff6b] rounded-[40px] flex flex-col items-center'>
                <p className='frisky text-4xl my-10'>⚡Play With Friend⚡</p>
                <p className='frisky text-3xl'>Join with ID:</p>
                <input ref={Idref} className='w-[350px] my-5 p-4 rounded-lg frisky placeholder:text-[#fd7e7e]' type="text" placeholder='Enter ID' />
                <button onClick={handleJoinRoom} className='uibtn my-4 frisky text-3xl'>Join Room</button>
                <button onClick={handleCreateRoom} className='uibtn my-2 frisky text-3xl'>Create Room</button>
                <CancelPlay/>
            </div>
        </div>
    )
}

export default FriendPlay
