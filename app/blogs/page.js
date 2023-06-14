import React from 'react'
import getHygraph from '@/utils/getHygraph'
import Link from 'next/link'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const page = async () => {
  const { posts } = await getHygraph()
  return (
    <div className=' flex justify-center items-center w-full py-0 md:py-10 ' >
      <div className=' flex flex-col justify-center items-start w-full md:w-2/3 p-2 md:p-0  ' >
        <h2 className='text-2xl md:text-3xl w-full text-center md:text-left font-semibold text-slate-800 leading-relaxed ' >All Blogs</h2>
        <div className=' w-full ' >
          <ul className=' flex gap-4 flex-wrap w-full justify-center md:justify-center lg:justify-start ' >
            {posts.map(post => (
              <li className='py-4 border-b-[1px] border-slate-200 w-full ' >
                <div className='flex justify-between text-slate-500 text-sm' >
                  <span>{post.createdAt}</span>
                  <span>By {post.author.name}</span>
                </div>
                <h3 className=' text-xl text-slate-800 mb-4 ' >{post.title}</h3>
                <Link href={`/blogs/${post.slug}`} className=' border-[1px] p-2 px-4 text-sm bg-slate-200 border-slate-200 ' >Read <FontAwesomeIcon icon={faArrowRight} className=' text-slate-600 ' ></FontAwesomeIcon> </Link>
              </li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page