import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full z-[2] h-screen fixed'>
       <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold'>Documents</div>
       <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13vw] text-zinc-950/70'> Docs.</h1>
    </div></>
  )
}

export default Background
