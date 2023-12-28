
'use client'
const Header3 = () => {
    return (
        <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60">
            <div className="p-5">
                <h2 className=" text-3xl text-center text-white font-bold">Over 157,000 hotels and homes across 35 countries</h2>
                <div className="grid grid-cols-5 my-5 mx-20">
                    <input type="text" placeholder="Search..." className="  h-14 outline-none text-lg px-3 border-r-2 border-gray-400 col-span-2" />
                    <input type="text" placeholder="Search..." className="  h-14 outline-none text-lg px-3 border-r-2 border-gray-400 col-span-1" />
                    <input type="text" placeholder="Search..." className="  h-14 outline-none text-lg px-3 col-span-1" />
                    <button type="submit" className="h-14 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-500 text-white text-xl" >Search</button>

                </div>
                <div className="flex mx-20 my-5 font-bold">
                    <button type="submit" className="h-14 px-3 py-2 hover:cursor-pointer text-white mr-5" >Continue your search</button>
                    <button type="submit" className="h-14 px-3 py-2 hover:cursor-pointer text-white mr-5 border-2 border-white hover:bg-gray-500 rounded-2xl" >Inn coorg Homestay . 2 Guests</button>

                </div>
            </div>
        </div>
    )
}

export default Header3
