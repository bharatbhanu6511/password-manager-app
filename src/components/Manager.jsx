import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

const Manager = () => {

    const ref = useRef()
    const ref2 = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const savePassword = () => {
        // toast('credentials logged', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        // });
        setPasswordArray([...passwordArray, {...form,id:uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]))
        setForm({site:'',username:'',password:''})

    }

    const handleDelete=(id)=>{
        console.log('deleting credentials with id ', id);
        if(confirm('Do you really want to delete this set of credentials')){
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        }
    }

    const handleEdit=(id)=>{
        console.log('editing credentials with id ', id);
        setForm(passwordArray.filter(i=>i.id===id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id!==id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const showPassword = () => {
        if (ref.current.src.includes("https://cdn.hugeicons.com/icons/view-stroke-rounded.svg")) {
            ref.current.src = "https://cdn.hugeicons.com/icons/view-off-stroke-rounded.svg"
            ref2.current.className = 'absolute top-3 right-4 cursor-pointer'
            passwordRef.current.type = 'text'
        } else {
            ref.current.src = "https://cdn.hugeicons.com/icons/view-stroke-rounded.svg"
            ref2.current.className = 'absolute top-2 right-4 cursor-pointer'
            passwordRef.current.type = 'password'
        }
    }

    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" /> */}
            {/* Same as */}
            {/* <ToastContainer /> */}

            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
            <div className=" flex flex-col p-4 bg-slate-40 md:container mx-auto">
                <h1 className='text-center text-4xl font-bold'>
                    <span className='text-green-700'>&lt;</span>
                    <span className='text-black'>Pass</span>
                    <span className='text-green-700'>Man /</span>
                    <span className='text-black'>&gt;</span>
                </h1>
                <p className='text-center text-green-900 text-lg'>your own password manager</p>
                <div className='gap-3 flex flex-col my-5'>
                    <input value={form.site} onChange={handleChange} className='rounded-full border border-purple-400 px-4 py-2' type="text" placeholder='Enter website name or URL' name='site' />
                    <div className="flex w-full gap-3 justify-between">
                        <input value={form.username} onChange={handleChange} className='rounded-full border border-purple-400 px-4 py-2 w-full' type="text" placeholder='Enter Username' name='username' />
                        <div className='relative'>
                            <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full border border-purple-400 px-4 py-2' type="password" placeholder='Enter Password' name='password' />
                            <span ref={ref2} className='absolute top-2 right-4 cursor-pointer' onClick={showPassword}>
                                {/* <lord-icon
                                    src="https://cdn.lordicon.com/vfczflna.json"
                                    trigger="hover">
                                </lord-icon> */}
                                {/* <img ref={ref} src="icons/show.png" width={34} alt="show" /> */}
                                <img ref={ref} src="https://cdn.hugeicons.com/icons/view-stroke-rounded.svg" alt="view-off" width="24" height="24" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='text-purple-400 border-purple-400 border flex flex-row justify-center items-center w-fit rounded-full p-2 hover:bg-purple-200 hover:text-white mx-auto '>
                        <lord-icon
                            src="https://cdn.lordicon.com/rcgrnzji.json"
                            trigger="hover"
                            state="hover-swirl">
                        </lord-icon>
                        Save credentials
                    </button>
                </div>

                <div className="passwords">
                    <h2>Your Passwords</h2>
                    {passwordArray.length === 0 && <p>no passwords to show</p>}
                    {passwordArray.length != 0 && <table className="table-auto w-full">
                        <thead className='bg-purple-400 text-white' >
                            <tr>
                                <th>Website or URL</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-purple-100' >
                            {passwordArray.map((item, index) => {
                                return <tr key={index} >
                                    <td>{item.site}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td className='flex flex-row gap-8 justify-center' >
                                        <span className='cursor-pointer' onClick={()=> handleEdit(item.id) } >
                                        <img src="https://cdn.hugeicons.com/icons/edit-02-stroke-rounded.svg" alt="edit-02" width="20" height="20" />
                                        </span>
                                        <span className='cursor-pointer' onClick={()=> handleDelete(item.id) } >
                                            <lord-icon
                                                src="https://cdn.lordicon.com/wpyrrmcq.json"
                                                trigger="hover"
                                                style={{"width":"20px","height":"20px"}}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
