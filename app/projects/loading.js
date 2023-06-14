import React from 'react'

const page = ({  }) => {
  const projects = [1,2,3]

    return (
        <div className=' flex justify-center items-center w-full py-0 md:py-10 ' >
            <div className=' flex flex-col justify-center items-start w-full md:w-2/3 p-2 md:p-0  ' >
                <h2 className='text-2xl md:text-3xl w-full text-center md:text-left font-semibold text-slate-800 leading-relaxed pb-2  h-8 bg-slate-300' ></h2>
                <div className=' w-full ' >
                    <ul className=' flex gap-4 flex-wrap w-full justify-center md:justify-center lg:justify-start ' >
                        {projects?.map(project => (
                            <li key={project.id} className=' flex flex-col border-[1px] border-slate-200 hover:border-slate-300 hover:rounded hover:shadow-none lg:hover:shadow-md  w-[95%] md:w-[60%] lg:w-[32%] ' >
                                <div href='' className=' cursor-default p-2 md:p-4 flex gap-4 flex-col w-full leading-relaxed ' >
                                    <h3 className=' text-lg pt-2 font-semibold text-slate-600 w-20 bg-slate-300 h-8 '></h3>
                                    <p className=' text-sm font-thin text-slate-500 pb-2 w-full bg-slate-300 h-14 overflow-hidden ' ></p>
                                    <div className=' w-8 h-10 bg-slate-300 ' >
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page