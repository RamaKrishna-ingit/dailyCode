import React, { useState } from 'react'
import Card from './Card'
function Foreground() {
    const data =[
        {desc:"hai gpr is the gtk of gkr opst ffflj clear?",filesize:".9mb", close:true, tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}}
    ]
    useState()
  return (
    <div className='fixed w-full h-full z-[3] top-0 left-0 '>
        {data.map((item,index)=>(
            <Card data={item}/>
        ))}
    </div>

  )
}

export default Foreground