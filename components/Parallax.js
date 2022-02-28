import React from 'react'

const Parallax = () => {
  return (
    <header
      className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img " style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80')` }}
    >
      <div >
        <h1 className='text-5xl text-yellow-50 flex items-center justify-center  text-center my-10'>Join the Movement</h1>
        <p className='p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl lg:mx-48'>Transhumanism Africa is aimed at creating a community of like-minded individuals or organizations interested in emerging and benficial technologies, that will contribute to positive impact and creating positive futures to the African continent that push the limits of physical and intellectual capabilites.</p>
      </div>
    </header>
  )
}

export default Parallax