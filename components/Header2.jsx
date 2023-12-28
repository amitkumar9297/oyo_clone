import React from 'react'

const Header2 = () => {
    const list = [
        {
            name: 'Banglore'
        },
        {
            name: 'Chennai'
        },
        {
            name: 'Gurgaon'
        },
        {
            name: 'Culcutta'
        },
        {
            name: 'Mumbai'
        },
        {
            name: 'Noida'
        },
        {
            name: 'Delhi'
        },
        {
            name: 'Hydrabaad'
        },
    ]
    return (
        <div>
            <div className="flex px-10 py-3 bg-gray-100 justify-between">
                {list.map((e) => {
                    return (
                        <span key={e.name}>{e.name}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Header2
