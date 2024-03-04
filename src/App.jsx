import React, { useState } from 'react'
import Bypass from './pages/Bypass'
import ServerDelay from './components/ServerDelay'

const App = () => {
    const [serverStatus,setserverStatus]=useState(false)
  return (
    <div className='sized relative'>
        {serverStatus?<ServerDelay/>:<></>}
        <Bypass setStatus={setserverStatus}/>
    </div>
  )
}

export default App
