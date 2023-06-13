import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import Link from 'next/link'

const Header = () => {
    return (
        <div className=' p-2 '>
            <div className=' flex flex-col md:flex-row justify-between items-center ' >
                <div className=' felx flex-col '>
                    <Link href='/'><Image src='/next.svg' width={200} height={200} /></Link>
                </div>
                <div className=' felx flex-col p-2 md:p-0 '>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Header