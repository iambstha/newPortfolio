import React from 'react'

const page = ({  }) => {
  const posts = [1,2,3]

    return (
      <div className=' flex justify-center items-center w-full py-0 md:py-10 ' >
      <div className=' flex gap-2 flex-col justify-center items-start w-full md:w-2/3 p-2 px-4 md:p-0  ' >
        <h2 className='text-2xl md:text-3xl w-full text-center md:text-left font-semibold text-slate-800 leading-relaxed h-8 bg-slate-200 ' ></h2>
        <div className=' w-full ' >
          <ul className=' flex gap-4 flex-wrap w-full justify-center md:justify-center lg:justify-start ' >
            {posts.map(post => (
              <li className='py-4 border-b-[1px] border-slate-200 w-full ' >
                <div className='flex justify-between text-slate-500 text-sm w-full bg-slate-300 h-5' >
                </div>
                <h3 className=' text-xl text-slate-800 mb-4 w-full h-8 bg-slate-300 ' ></h3>
                <div className=' border-[1px] p-2 px-4 text-sm border-slate-200 h-12 w-10 bg-slate-300 ' ></div>
              </li>))}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default page