import React, { useContext } from 'react'

import '../../styles/GlobalStyle.scss'
import { Left_Scissor, Left_Rock, Right_Paper } from '../../Helpers/AssetHelper'
import Serverconnect from '../../Helpers/Socketconfig'
import { GameData, Gamestarted } from '../../Helpers/Contexts'
import { CurrentRoom, OppSelected, setPlayer } from '../../Helpers/RuntimeVars'

const MoveButton = (props) => {
    const io = useContext(Serverconnect)

    const { imgName, SelectedMove,controls } = props;
    const toads = 'bg-[#0eff1a] Selection_animation'
    const divstyle = 'hovering flexed rounded-3xl border-white border-4'
    const imgarray = {Scissor:Left_Scissor, Rock:Left_Rock, Paper:Right_Paper}
    const Game_status = useContext(Gamestarted)
    const Game_begin = useContext(GameData)
    const handleMoveSelection = () => {
        io.emit('MoveSelected',[CurrentRoom,imgName]);
        setPlayer('Left_'+imgName)
        SelectedMove[1](imgName);
        controls(true);
        if(OppSelected!=='not'){
            Game_status[1](true)
            Game_begin[1](true)
        }
    }
    return (
        <div onClick={handleMoveSelection} className={`${divstyle} h-[120px] mox:w-[120px] mox:h-[110px] ${SelectedMove[0] === imgName ? toads : 'bg-[#ffd70e]'}`}>
            <img className='h-[80%]' src={imgarray[imgName]} alt="RockPaperScissor" />
        </div>
    )
}

export default MoveButton
