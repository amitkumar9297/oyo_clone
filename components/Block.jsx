import Image from 'next/image'
import React from 'react'
import { MdOutlineBusinessCenter } from "react-icons/md";

const Block = ({ title, para, pic }) => {

    return (
        <div className='border-r border-gray-300 w-50 h-full flex items-center px-3'>
            <Image
                src={pic}
                width={50}
                height={100}
                className='w-10 h-10 rounded-full mr-5' />
            {/* <MdOutlineBusinessCenter /> */}

            <div>
                <h3 className=' font-bold'>{title}</h3>
                <p className=' text-gray-400 text-xs line-clamp-1'>{para}</p>
            </div>
        </div>
    )
}

export default Block
