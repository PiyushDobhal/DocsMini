import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref=useRef(null);
    const data = [
        {
            desc:"this is a sample description which is very long and should be truncated", 
            filesize:".5mb",
            close:false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor:"green"}, 
        },
        {
            desc:"This is a sample description", 
            filesize:".9mb",
            close:false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor:"blue"}, 
        },
        {
            desc:"This is a sample description", 
            filesize:"1.3mb",
            close:false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor:"green"}, 
        },
       
    ]
  return (
      <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-8 flex-wrap p-7'>
       {data.map((item, index) => <Card data={item} reference={ref}/>)}
      </div>
   
  )
}

export default Foreground
