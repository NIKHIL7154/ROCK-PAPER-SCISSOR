import React, { useContext, useEffect, useRef } from 'react'
import Left_Paper from '../assets/Left_Paper.png'
import Left_Rock from '../assets/Left_Thumb.png'
import Left_Scissor from '../assets/Left_Scissor.png'
import Right_Paper from '../assets/Right_Paper.png'
import Right_Rock from '../assets/Right_Rock.png'
import Right_Scissor from '../assets/Right_Scissor.png'
import Gamestarted from '../Helpers/Contexts'

import gsap from "gsap";


const MoveDisplay = (props) => {
    const { image_to_show } = props;
    const { align } = props;
    const Images_object = { Left_Paper, Left_Rock, Left_Scissor, Right_Paper, Right_Rock, Right_Scissor }
    const Move_ref = useRef();
    const Game_info = useContext(Gamestarted)
    useEffect(() => {
        if(image_to_show.includes('Left')){
        gsap.fromTo(Move_ref.current,0.2,{css:{rotate:-10}},{css:{rotate:10},repeat:4,yoyo:true})
        }else{
            gsap.fromTo(Move_ref.current,0.2,{css:{rotate:10}},{css:{rotate:-10},repeat:4,yoyo:true})
        }
    }, [Game_info]);

    return (
        <div className={`w-[50%] h-full flex justify-${align} items-center overflow-hidden`}>
            <div className=' '>
                <img ref={Move_ref} className='' src={Images_object[image_to_show]} alt="" />

            </div>
        </div>
    )
}

export default MoveDisplay
