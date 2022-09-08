import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className="text-white bg-black h-screen">
      <div className='max-w-[700px] mx-auto p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
          <p className='py-2'>Don't have an account yet? <Link to='/createaccount' className='underline hover:text-[#00ff01]'>Create account.</Link></p>
        </div>
        <form>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address:</label>
            <input className='p-3 rounded-md' type="email" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password:</label>
            <input className='p-3 rounded-md' type="password" />
          </div>
          <button className='w-full py-4 my-2'>Sign In</button>
          <Link to='/'><button className='w-full py-4 my-2'>Back Home</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Signin