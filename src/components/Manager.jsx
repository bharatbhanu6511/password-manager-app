import React from 'react'
import { useRef } from 'react'

const Manager = () => {

    const ref=useRef()

    const showPassword=()=>{
        alert('show password')
        ref.current.src="icons/show.png"
    }

    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
            <div className="text-white flex flex-col p-4 bg-slate-40 container mx-auto">
                <h1 className='text-center text-4xl font-bold'>
                    <span className='text-green-700'>&lt;</span>
                    <span className='text-black'>Pass</span>
                    <span className='text-green-700'>Man /</span>
                    <span className='text-black'>&gt;</span>
                </h1>
                <p className='text-center text-green-900 text-lg'>your own password manager</p>
                <div className='gap-3 flex flex-col my-5'>
                    <input className='rounded-full border border-purple-400 px-4 py-2' type="text" placeholder='Enter website name or URL' />
                    <div className="flex w-full gap-3 justify-between">
                        <input className='rounded-full border border-purple-400 px-4 py-2 w-full' type="text" placeholder='Enter Username' />
                        <div className='relative'>
                            <input className='rounded-full border border-purple-400 px-4 py-2' type="text" placeholder='Enter Password' />
                            <span className='absolute top-1 right-3 cursor-pointer' onClick={showPassword}>
                                {/* <lord-icon
                                    src="https://cdn.lordicon.com/vfczflna.json"
                                    trigger="hover">
                                </lord-icon> */}
                                <img ref={ref} src="icons/show.png" width={34} alt="show" />
                            </span>
                        </div>
                    </div>
                    <button className='text-purple-400 border-purple-400 border flex flex-row justify-center items-center w-fit rounded-full p-2 hover:bg-purple-200 hover:text-white mx-auto '>
                        <lord-icon
                            src="https://cdn.lordicon.com/rcgrnzji.json"
                            trigger="hover"
                            state="hover-swirl">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager
