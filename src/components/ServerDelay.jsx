import React from 'react'

const ServerDelay = () => {
  return (
    <div className='sized z-50 absolute flexed bg-[#a19d9d39]'>
      <div className='w-[400px] mox:w-[300px] mox:h-[150px] flexed h-[300px] bg-[#f7dbdb] rounded-3xl'>
            <p className='frisky mox:text-[27px]'>Error: Request timeout. <br/> Reconnecting with server....</p>
      </div>
    </div>
  )
}

export default ServerDelay
