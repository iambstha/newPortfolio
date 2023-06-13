import Image from 'next/image'

export default function Home() {
  return (
    <main className=' flex justify-between items-center h-auto py-10 ' >
      <div className=' w-1/2 ' >
        <h2 className=' py-2 text-4xl leading-relaxed cursor-default' >
          <p>
            Hi! I am <span className=' text-yellow-700 font-semibold font-mono  hover:text-orange-500 ' >Bishal</span>.
          </p>
          <p>
            I am a <span className=' text-yellow-700 font-semibold font-mono  hover:text-orange-500 ' >software developer,</span> <span className=' text-yellow-700 font-semibold font-mono  hover:text-orange-500 ' >web designer,</span> & <span className=' text-yellow-700 font-semibold font-mono  hover:text-orange-500 ' >teacher</span> based on Kathmandu,Nepal.
          </p>
        </h2>
      </div>
      <div className=' w-1/2 flex justify-center items-start gap-4 h-60 cursor-default '>
        <div className=' flex flex-col border-[1px] border-slate-200 bg-slate-100 shadow shadow-slate-100 h-full p-2 w-60' >
          <h2 className=' text-lg leading-loose font-semibold text-slate-800 border-b-[1px] border-b-slate-400 mb-2 ' >My Tech Stacks</h2>
          <ul className=' flex gap-1 overflow-hidden flex-wrap ' >
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >JavaScript</li>
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >ReactJS</li>
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >NextJS</li>
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >Python</li>
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >Database</li>
          </ul>
        </div>
        <div className=' flex flex-col border-[1px] border-slate-200 bg-slate-100 shadow shadow-slate-100 h-full p-2 w-60' >
          <h2 className=' text-lg leading-loose font-semibold text-slate-800 border-b-[1px] border-b-slate-400 mb-2 ' >Hobbies</h2>
          <ul className=' flex gap-1 overflow-hidden flex-wrap ' >
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >Movies</li>
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >Travelling</li>
            <li className=' flex p-2 overflow-hidden border-[1px] border-slate-300 ' >Exploring</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
