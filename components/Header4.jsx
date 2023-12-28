
'use client'

import Image from "next/image"

const Header4 = () => {
    return (
        <div className=" flex my-14 border rounded-lg border-green-300 justify-between items-center px-3">
            <div className="flex items-center">
                <Image src={'/fire.jpg'} alt="fire" width={200} height={200} className="w-20 h-20 rounded-full mr-5" />
                <div className=" text-xl">
                    <p className="font-bold">Get acess to exclusive deals</p>
                    <p>only the best deal reach your inbox</p>
                </div>
            </div>
            <div className=" flex">
                <input type="email" className="px-6 py-3 mr-5 w-80 h-16 outline-none border border-gray-300 rounded-lg" placeholder="e.g. john@gmail.com" />
                <button type="submit" className="w-48 h-14 rounded-lg bg-red-500 text-xl text-white cursor-pointer">Notify</button>
            </div>
        </div>
    )
}

export default Header4
