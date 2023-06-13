import Link from 'next/link'
import React from 'react'

const projects = [
    {
        id: 1,
        name: "Potatao is killer",
        tags: [
            { id: 1, name: 'potato' },
            { id: 1, name: 'killer' }
        ],
        desc: ' lorem epsum is okay now.',
        liveUrl: 'www.example.com',
        sourceUrl: 'www.github.com',
    },
    {
        id: 1,
        name: "Potatao is killer",
        tags: [
            { id: 1, name: 'potato' },
            { id: 1, name: 'killer' }
        ],
        desc: ' lorem epsum is okay now.',
        liveUrl: 'www.example.com',
        sourceUrl: 'www.github.com',
    },
    {
        id: 1,
        name: "Potatao is killer",
        tags: [
            { id: 1, name: 'potato' },
            { id: 1, name: 'killer' }
        ],
        desc: ' lorem epsum is okay now.',
        liveUrl: 'www.example.com',
    },
    {
        id: 1,
        name: "Potatao is killer",
        tags: [
            { id: 1, name: 'potato' },
            { id: 1, name: 'killer' }
        ],
        desc: ' lorem epsum is okay now.',
        liveUrl: 'www.example.com',
        sourceUrl: 'www.github.com',
    },
]

const page = () => {
    return (
        <div className=' flex justify-center items-center w-full py-10 ' >
            <div className=' flex flex-col justify-center items-start w-full md:w-2/3 p-2 md:p-0  ' >
                <h2 className=' text-3xl w-full text-center md:text-left font-semibold text-slate-800 leading-relaxed ' >All Projects</h2>
                <div>
                    <ul className=' flex gap-4 flex-wrap w-full justify-center md:justify-center lg:justify-start ' >
                        {projects.map(project => (
                            <li key={project.id} className=' flex flex-col border-[1px] border-slate-200 hover:border-slate-300 hover:rounded hover:shadow-none lg:hover:shadow-md  w-[95%] md:w-[45%] lg:w-[32%] ' >
                                <div href='' className=' cursor-default p-4 flex flex-col w-full leading-relaxed ' >
                                    <div className='flex gap-2' >{project.tags.map(tag => (<span className=' border-[1px] border-s-slate-200 p-[2px] px-2 text-xs rounded-md ' key={tag.id}>{tag.name}</span>))}</div>
                                    <h3 className=' text-lg pt-2 font-semibold text-slate-600 '>{project.name}</h3>
                                    <p className=' text-sm font-thin text-slate-500 pb-2 h-14 overflow-hidden ' >{project.desc}</p>
                                    <div>
                                        <ul className=' flex gap-2 ' >
                                            {project.sourceUrl ? <li><Link className=' border-[1px] border-slate-800 bg-slate-800 hover:bg-slate-700 hover:border-slate-700 py-[4px] px-[8px] rounded text-slate-50 ' href={project.sourceUrl}>Source Code</Link></li> : ''}
                                            {project.liveUrl ? <li><Link className=' border-[1px] border-slate-800 bg-slate-800 hover:bg-slate-700 hover:border-slate-700 py-[4px] px-[8px] rounded text-slate-50 ' href={project.liveUrl}>Live</Link></li> : ''}
                                        </ul>
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