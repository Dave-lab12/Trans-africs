
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getCsrfToken, signIn } from "next-auth/react"

const Login = ({ csrfToken }) => {
    const router = useRouter()
    const [email, setEmail] = useState(null)
    const [loginError, setLoginError] = useState('')
    const [warning, setWarning] = useState(false)
    const [password, setPassword] = useState(null)
    const handleSignIn = (e) => {
        e.preventDefault()
        signIn('credentials',
            {
                redirect: false,
                email,
                password,
            }
        ).then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                router.push('/')
            } else {
                setWarning(true)
            }
        })

    }
    return (
        <div className="w-full md:w-1/2 flex flex-col m-auto">


            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p className="text-center text-3xl">Welcome.</p>
                {
                    warning &&
                    <span className='flex m-auto p-2 bg-red-500  text-white rounded-md'>Invalid Credentials</span>
                }
                <form className="flex flex-col pt-3 md:pt-8" >
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <div className="flex flex-col pt-4">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="flex flex-col pt-4">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <input type="submit" onClick={e => handleSignIn(e)} value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                </form>
                <Link href="/register"><a><div className="text-center pt-12 pb-12">
                    <p className="underline font-semibold">Don&apos;t have an account? Register here.</p>
                </div></a></Link>
            </div>

        </div>

    )
}
export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context)
    return {
        props: { csrfToken },
    }
}

export default Login