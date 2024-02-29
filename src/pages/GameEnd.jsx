import React, { useEffect } from 'react'
import { GameLose, GameWin, Left_Scissor, Right_Scissor,} from '../Helpers/AssetHelper'
import PlayOnline from '../components/Buttons/PlayOnline'
import PlayWithFriend from '../components/Buttons/PlayWithFriend'
import { useNavigate, useParams } from 'react-router-dom'
import { CurrentRoom, ResetRuntime } from '../Helpers/RuntimeVars'
const GameEnd = () => {
    const navigate= useNavigate()
    useEffect(() => {
        if(CurrentRoom===''){
            navigate('/')
        }
        ResetRuntime()
    }, [navigate]);
    
    const res=useParams().result
    let imgsrc=GameWin
    let lastmessage='You have won the match. Feeling good for you. Keep it up champ!'
    if(res==='lost'){
        imgsrc=GameLose
        lastmessage="You have lost the match. Feeling very bad for you but don't loose hope you can fight again with full power."
    }
    
  return (
    <div className='sized flexed bg-[#ff4646]'>
      <div className="homepage relative overflow-hidden flexed w-[95%] h-[80%] bg-[#ffffff46] rounded-2xl">
                <img className='w-[35%] max-w-[350px] z-10 absolute left-0 bottom-0 rotate-[-20deg]' src={Left_Scissor} alt="" />
                
                <div className=" flex items-center rounded-[20px] main w-[90%] h-[90%] gap-4 flex-col">
                    <div className='h-[30%] flexed'><img className='h-full' src={imgsrc} alt="You win" /></div>
                    <p className='frisky mox:text-3xl md:mb-[50px]'>{lastmessage}</p>
                    <PlayOnline/>
                    <PlayWithFriend/>
                </div>
                
                <img className='z-10 w-[35%] max-w-[350px] absolute right-0 bottom-0 rotate-[20deg]' src={Right_Scissor} alt="" />

                
      </div>
    </div>
  )
}

export default GameEnd