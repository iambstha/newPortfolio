import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import Link from 'next/link'

const Header = () => {
    return (
        <div className=' p-2 border-b-[1px] border-b-slate-200 '>
            <div className=' flex flex-col md:flex-row justify-between items-center ' >
                <div className=' felx flex-col h-full p-2 md:p-0 '>
                    <Link href='/'><Image src='/logo_85.png' width={200} height={85} /></Link>
                </div>
                <div className=' felx flex-col p-2 md:p-0 '>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Header