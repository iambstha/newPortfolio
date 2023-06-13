import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className=' flex justify-center flex-col items-center border-t-[1px] border-t-gray-400 mt-2 ' >
        <div className=' flex justify-center items-center ' >
            <ul className=' flex gap-4 md:gap-8  lg:gap-10 py-4 text-sm md:text-lg lg:text-2xl text-gray-900 ' >
                <li><Link href=''><FontAwesomeIcon icon={faFacebook} className=' hover:text-blue-950 ' /></Link></li>
                <li><Link href=''><FontAwesomeIcon icon={faInstagram} className=' hover:text-purple-900 ' /></Link></li>
                <li><Link href=''><FontAwesomeIcon icon={faLinkedin} className=' hover:text-blue-800 ' /></Link></li>
                <li><Link href=''><FontAwesomeIcon icon={faGithub} className=' hover:text-black ' /></Link></li>
            </ul>
        </div>
        <div>
            <p className=' text-slate-500 ' >&copy; Copyright, <span className=' text-slate-600 ' >Bishal Shrestha</span> </p>
        </div>
    </div>
  )
}

export default Footer