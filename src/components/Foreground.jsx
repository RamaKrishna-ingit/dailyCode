import React, { useRef} from 'react'
import Card from './Card'


function Foreground() {
  const ref=useRef(null);
    const data =[
        {desc:"hai gpr is the gtk of gkr opst ffflj clear?",
          filesize:".9mb", 
          close:true, 
          tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}
        },
        {desc:"hai gpr is the gtk of gkr opst ffflj clear?",
          filesize:".9mb", 
          close:true, 
          tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
        {desc:"hai gpr is the gtk of gkr opst ffflj clear?",
          filesize:".9mb", 
          close:true, 
          tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"}
        },
    ];
  return (
    <div ref={ref} className='fixed w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>

  )
}

export default Foreground