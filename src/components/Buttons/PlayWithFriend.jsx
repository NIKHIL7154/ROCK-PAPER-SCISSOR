import React from 'react'
import { useNavigate } from 'react-router-dom'


const PlayWithFriend = () => {
    const navigate = useNavigate();
    const handlePlayWithFriend = async ()=>{
        navigate('/playwithfriend')
    }
  return (
    <button onClick={handlePlayWithFriend} className='dance_anim my-4 uibtn frisky text-2xl'>Play With Friend</button>
  )
}

export default PlayWithFriend
