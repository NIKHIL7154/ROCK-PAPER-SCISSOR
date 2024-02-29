
import { useContext, useEffect, useRef } from 'react';
import { GameData, Gamestarted, Opponentturn, Playerturn } from '../Helpers/Contexts'
import ShowMove from './ShowMove';
import Serverconnect from '../Helpers/Socketconfig';
import { PlayerSelected, setOpp } from '../Helpers/RuntimeVars';


const MoveDisplay = () => {
    const io = useContext(Serverconnect);
    const Player_move = useContext(Playerturn);
    const Opponent_move = useContext(Opponentturn);
    const Game_status = useContext(Gamestarted)
    const Game_begin = useContext(GameData)
    const Oppstatus = useRef('')

    useEffect(() => {
        io.on('Movebyopp', (move) => {
            if(Oppstatus.current!==null){
            Oppstatus.current.innerHTML = 'Opponent✅<br> Waiting for you..'}
            setOpp("Right_" + move)
            if (PlayerSelected !== 'not') {
                Game_status[1](true)
                Game_begin[1](true)
            }
        })
    }, [Game_begin,Game_status,io]);

    return (
        <div className={`w-[100%] h-full flex items-center justify-start overflow-hidden`}>
            <ShowMove imgshow={Player_move[0]} align={'start'} />

            {Game_begin[0] ? <ShowMove imgshow={Opponent_move[0]} align={'end'} />
                : <p ref={Oppstatus} className='w-[50%] frisky mox:text-2xl text-4xl text-center'>Waiting for opponent to select..</p>}

        </div>
    )
}

export default MoveDisplay
