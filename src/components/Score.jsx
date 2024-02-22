import React from 'react'
import Account_img from '../assets/Acoount_profile.png'
import Pokeball from '../assets/Pokeball.png'
const Score = () => {
  return (
    <div className='flex w-full h-full justify-between items-center px-8 py-3'>
      <div className='bg-[#ffffff85] gap-8 rounded-3xl w-[40%] h-full flexed justify-start'>
        <img className='h-[90%] px-4' src={Account_img} alt="" />
        <img className='h-[70%]' src={Pokeball} alt=""/>
      </div>
      <div className='bg-[#ffffff85] gap-8 rounded-3xl w-[40%] h-full flexed justify-start inverted'>
        <img className='h-[90%] px-4' src={Account_img} alt="" />
        <img className='h-[70%]' src={Pokeball} alt=""/>
      </div>
    </div>
  )
}
export default Score
