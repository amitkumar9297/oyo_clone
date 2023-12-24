import Image from 'next/image'
import React from 'react'
import Block from './Block'

const Header1 = () => {
    return (
        <div className='flex h-20 justify-between items-center border-b-2 border-gray-500 px-10'>
            <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-28 h-28' />
            <div className='h-full flex'>
                <Block title={'Become a member'} para={'Additional 10% off on stays'} pic={'/member.svg'} />
                <Block title={'OYO for Budiness'} para={'Trusted by 5000 corporates'} pic={'/business-bag.svg'} />
                <Block title={'List Your Property'} para={'Start earning in 30min'} pic={'building.svg'} />
                <Block title={'987654321'} para={'Call me to book now'} pic={'call.svg'} />

                <div className=' flex items-center px-3 w-50'>
                    <Image src={'/login.svg'} alt='login' width={50} height={50} className='w-10 h-10 rounded-full mr-5'
                    />
                    <h3 className=' font-bold'>Login / SignUp</h3>
                </div>
            </div>
        </div>
    )
}

export default Header1
