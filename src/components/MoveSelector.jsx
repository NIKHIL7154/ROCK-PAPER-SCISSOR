import React, { useContext, useEffect, useState } from 'react'
import '../styles/GlobalStyle.scss'
import { Gamestarted} from '../Helpers/Contexts'
import MoveButton from './Buttons/MoveButton'
const MoveSelector = () => {
    const GameStatus = useContext(Gamestarted)
    const [Selection, setSelection] = useState('')
    const [Disable_control, setDisable_control] = useState(false);
    useEffect(() => {
        if(GameStatus[0]){
            setDisable_control(false);
            setSelection('')
        }
    }, [GameStatus]);


    return (
        <div className='relative w-full h-full flexed gap-3 md:gap-16'>
            {Disable_control ? <div className='w-full h-full absolute z-10'></div> : <></>}
            <MoveButton imgName={'Scissor'} SelectedMove={[Selection,setSelection]} controls={setDisable_control}/>
            <MoveButton imgName={'Rock'} SelectedMove={[Selection,setSelection]} controls={setDisable_control}/>
            <MoveButton imgName={'Paper'} SelectedMove={[Selection,setSelection]} controls={setDisable_control}/>
        </div>
    )
}

export default MoveSelector
