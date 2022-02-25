import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
const Register = () => {
    const router = useRouter()
    const [userData, setUserData] = useState({})
    const [error, setError] = useState({ isValid: '', message: '' })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userData.username || !userData.email || !userData.password || !userData.firstname || !userData.lastname || !userData.confirm) {
            setError({ ...error, isValid: true, message: 'please fill all the forms ' })
        } else if (userData.password !== userData.confirm) {
            setError({ ...error, isValid: true, message: 'passwords does not match' })
        } else {
            try {

                axios.post('api/users', {
                    userData
                })
                router.push('/login')
            } catch (error) {
                console.log(error);
            }
        }

    }
    const handleChange = (e) => {
        e.persist();
        setUserData(useData => ({ ...useData, [e.target.name]: e.target.value }));
    }
    useEffect(() => {
        const removeWarning = () => setTimeout(() => {
            setError({})
        }, 5000)
        removeWarning()
        return clearTimeout(removeWarning)
    }, [error.isValid])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className=" lg:w-2/5 md:w-1/2 w-2/3">
                {
                    error.isValid &&
                    <span className='flex m-auto p-2 bg-red-500  text-white rounded-md'>{error.message}</span>
                }
                <div className="bg-white p-10 rounded-lg  min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Register</h1>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Username</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" onChange={e => handleChange(e)} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email" id="email" placeholder="@email" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="firstname">First name</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="firstname" id="firstname" placeholder="@firstname" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="lastname">last Name</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="lastname" id="lastname" placeholder="@lastname" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" onChange={(e) => handleChange(e)} />
                    </div >
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirm password</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" onChange={(e) => handleChange(e)} />
                    </div >
                    <button type="submit" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 w-full" onClick={(e) => handleSubmit(e)}>Register</button>
                    <Link href='/login'><a><button className=" w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans" onClick={(e) => handleSubmit(e)}>Login</button></a></Link>
                </div >
            </div >
        </div >
    )
}

export default Register