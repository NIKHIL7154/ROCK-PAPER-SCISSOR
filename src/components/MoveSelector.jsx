import React, { useState } from 'react'
import Left_Scissor from '../assets/Left_Scissor.png'
import Right_Paper from '../assets/Right_Paper.png'
import Thumb from '../assets/Left_Thumb.png'
import '../styles/GlobalStyle.scss'
const MoveSelector = (props) => {
  const {Select_Move} = props
  const [Selection,setSelection] = useState('')
  const toads= 'bg-[#0eff1a] Selection_animation'
  const handleMoveSelection = (val) =>{
    Select_Move(val)
    setSelection(val)
  }
  return (
    <div className='w-full h-full flexed gap-16'>
        <div onClick={()=>{handleMoveSelection('Left_Scissor')}} className={`flexed h-[90%] rounded-3xl border-white border-4 ${Selection==='Left_Scissor'?toads:'bg-[#ffd70e]'}`}>
            <img className='h-[80%]' src={Left_Scissor} alt="Left_Scissor" />
        </div>
        <div onClick={()=>{handleMoveSelection('Left_Rock')}} className={`flexed h-[90%] rounded-3xl w-[11%] border-white border-4 ${Selection==='Left_Rock'?toads:'bg-[#ffd70e]'}`}>
            <img className='h-[60%] rotate-[-90deg]' src={Thumb} alt="Left_Rock" />
        </div>
        <div onClick={()=>{handleMoveSelection('Left_Paper')}} className={`flexed h-[90%] rounded-3xl border-white border-4 ${Selection==='Left_Paper'?toads:'bg-[#ffd70e]'}`}>
            <img className='h-[80%]' src={Right_Paper} alt="Left_Paper" />
        </div>
    </div>
  )
}

export default MoveSelector
