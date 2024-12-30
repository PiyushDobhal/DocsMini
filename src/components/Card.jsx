import React from 'react'
import { IoDocuments } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.5}} className=' relative w-60 text-white p-5 h-72 bg-zinc-900/95 rounded-[40px] overflow-hidden'>
            <IoDocuments/>
         <p className='text-sm mt-3  font-semibold leading-tight '>{data.desc}.</p>
         <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex  justify-between py-5 px-6  mb-0 items-center'>
                <h5 className='font-semibold'>{data.filesize}</h5>  
            <span className='w=8 h=8 rounded-full flex items-center justify-center'>
                {data.close ? <IoMdCloseCircle size="1.2em" color='brown' /> : <FaDownload size=".9em" color='orange' />}
                 </span>
             </div>  
             {data.tag.isOpen && (            
             <div className={`tag w-full py-5 flex items-center justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-700"} `}>
                <h3 className='text-sm '>{data.tag.tagTitle}</h3></div> )}   
         </div>
    </motion.div>
  )
}
export default Card
