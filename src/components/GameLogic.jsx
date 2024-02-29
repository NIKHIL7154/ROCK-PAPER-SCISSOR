import React, { useContext, useEffect } from 'react'
import { GameData, Gamestarted, Opponentturn, Playerturn } from '../Helpers/Contexts'
import { CurrentRoom, GamerId, OppSelected, PlayerSelected, setOpp, setPlayer } from '../Helpers/RuntimeVars';
import Winnerboy from '../Helpers/CheckWin';
import { GameLose, GameWin, GameDraw } from '../Helpers/AssetHelper';
import Serverconnect from '../Helpers/Socketconfig';

const GameLogic = (props) => {
    const {res} = props
    const io = useContext(Serverconnect)
    const Player_move = useContext(Playerturn);
    const Opponent_move = useContext(Opponentturn);
    const Game_status = useContext(Gamestarted)
    const Game_begin = useContext(GameData)
    useEffect(() => {
        if (Game_status[0]) {
            if (PlayerSelected !== 'not' && OppSelected !== 'not') {
                Game_status[1](false)
                setTimeout(() => {
                    Player_move[1](PlayerSelected)
                    Opponent_move[1](OppSelected)
                    let result = Winnerboy(PlayerSelected,OppSelected);
                    if(result==='you'){
                        io.emit('ResultUpdate',{id:CurrentRoom,plid:GamerId,final:1})
                        
                        res(GameWin)
                    }else if(result==='opp'){
                        res(GameLose)
                    }else{
                        res(GameDraw)
                    }
                    setTimeout(() => {
                        setPlayer('not')
                        setOpp('not')
                        Player_move[1]('Left_Rock')
                        Opponent_move[1]('Right_Rock')
                        Game_begin[1](false)
                        res('not')
                    }, 2000)
                }, 2000)
            }
        }
    }, [Game_status]);
    return (
        <>
        </>
    )
}

export default GameLogic
