import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ResetRuntime } from '../../Helpers/RuntimeVars';

const CancelPlay = () => {
    const navigate = useNavigate();
    const handleCancelPlay =()=>{
        
        navigate('/home')
        ResetRuntime()
    }
  return (
    <button onClick={handleCancelPlay} className='my-4 uibtn frisky mox:text-2xl mox:w-[150px]'>Cancel Game</button>
  )
}

export default CancelPlay
