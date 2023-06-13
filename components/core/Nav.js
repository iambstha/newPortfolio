import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <ul className=' flex gap-4 ' >
            <li><Link href='/about' className=' flex gap-1 text-slate-700 hover:underline hover:text-slate-950 ' ><span className=' text-base font-semibold hover:font-bold ' >01</span><span>about</span></Link></li>
            <li><Link href='/blogs' className=' flex gap-1 text-slate-700 hover:underline hover:text-slate-950 ' ><span className=' text-base font-semibold hover:font-bold ' >02</span><span>blogs</span></Link></li>
            <li><Link href='/projects' className=' flex gap-1 text-slate-700 hover:underline hover:text-slate-950 ' ><span className=' text-base font-semibold hover:font-bold ' >03</span><span>projects</span></Link></li>
            <li><Link href='/resume' className=' flex gap-1 text-slate-700 hover:underline hover:text-slate-950 ' ><span className=' text-base font-semibold hover:font-bold ' >04</span><span>resume</span></Link></li>
        </ul>
    </div>
  )
}

export default Nav