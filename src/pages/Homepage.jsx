import React, { useEffect } from 'react'
import '../styles/Homepage.scss'
import rockpaper from '../assets/Rockpaper.png'
import Main_menu from '../assets/Main_menu.png'
import PlayOnline from '../components/Buttons/PlayOnline'
import PlayWithFriend from '../components/Buttons/PlayWithFriend'

import { HomeMusic } from '../Helpers/AssetHelper'
import { ResetRuntime } from '../Helpers/RuntimeVars'

const Homepage = () => {
    

    useEffect(() => {
        /* const themesong = new Audio(HomeMusic)
        themesong.setAttribute('loop',true)
        themesong.muted=true
        setTimeout(()=>{
            themesong.muted=false
            themesong.play()

        },1000) */
        ResetRuntime();
    }, []);
    return (
        <div className='flexed bg-[#ff5050] sized'>
            <div className="homepage flexed flex-col md:flex-row w-[380px] md:w-[1000px] h-[90%] md:h-[80%] bg-[#ffffff46] rounded-3xl">
                <div className='md:w-[40%] md:h-full flexed mainmenu_gamename flex-col'>
                    <img className='h-[100%] md:h-[]' src={rockpaper} alt="Rock_Paper_Scissor" />
                </div>
                <div className='relative flex flex-col items-center w-[60%] h-full'>
                    <img className='w-[300px] md:mt-5 md:w-[450px] assets_Image' src={Main_menu} alt="" />
                    <div className='flexed gap-2 flex-col w-[40%] h-[30%] absolute bottom-5 md:right-[5%] md:bottom-[5%]'>
                        <PlayOnline/>
                        <PlayWithFriend/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
