import React from 'react'
import '../styles/Homepage.scss'
import rockpaper from '../assets/Rockpaper.png'
import Main_menu from '../assets/Main_menu.png'

const Homepage = () => {

    const handlePlayOnline =()=>{

    }
    const handlePlayWithFriend =()=>{

    }

    return (
        <div className='flexed backgrounds w-[100vw] h-[100vh]'>
            <div className="homepage flexed w-[70%] h-[80%] bg-[#ffffff46] rounded-2xl">
                <div className='w-[40%]  h-full flexed mainmenu_gamename flex-col'>
                    <img className='' src={rockpaper} alt="Rock_Paper_Scissor" />
                </div>
                <div className='relative flexed w-[60%] h-full'>
                    <img className='assets_Image' src={Main_menu} alt="" />
                    <div className='flexed gap-2 flex-col w-[40%] h-[30%] absolute right-[5%] bottom-[5%]'>
                        <button onClick={handlePlayOnline} className='dance_anim uibtn frisky'>Play Online</button>
                        <button onClick={handlePlayWithFriend} className='dance_anim uibtn frisky text-2xl'>Play With Friend</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
