import React, { useContext, useEffect, useRef } from 'react'
import { Gamestarted } from '../Helpers/Contexts';
import { Left_Paper, Left_Rock, Left_Scissor, Right_Paper, Right_Rock, Right_Scissor  } from '../Helpers/AssetHelper';
import gsap from "gsap";

const ShowMove = (props) => {
    const {imgshow,align}  = props;
    
    const Move_ref = useRef();
    const GameStatus = useContext(Gamestarted)
    const Images_object = { Left_Paper, Left_Rock, Left_Scissor, Right_Paper, Right_Rock, Right_Scissor }
    var isittrue = imgshow.includes('Left');
    useEffect(() => {
        if (GameStatus[0]) {
            if (isittrue) {
                gsap.fromTo(Move_ref.current, 0.2, { css: { rotate: -10 } }, { css: { rotate: 0 }, repeat: 7, yoyo: true })
            } else {
                gsap.fromTo(Move_ref.current, 0.2, { css: { rotate: 10 } }, { css: { rotate: 0 }, repeat: 7, yoyo: true })
            }
        }
    }, [GameStatus,isittrue]);
  return (
    <div className={`w-[50%] h-full flex items-center justify-start overflow-hidden`}>
            <div className={`w-full items-start flex ${align === 'start' ? 'justify-start' : 'justify-end'} `}>
                <img ref={Move_ref} className='mox:w-[170px] w-[60%]' src={Images_object[imgshow]} alt="" />

            </div>
        </div>
  )
}

export default ShowMove
