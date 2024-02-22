import React, { useState } from 'react'
import Gamestarted from '../Helpers/Contexts'
import GamePage from './GamePage'

const Bypass = () => {
    const [Gamebegin, setGamebegin] = useState(false)
    return (
        <Gamestarted.Provider value={[Gamebegin,setGamebegin]}>
            <GamePage />
        </Gamestarted.Provider>
    )
}

export default Bypass
