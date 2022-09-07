import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="text-white bg-black h-screen">
      <div className='max-w-[700px] mx-auto p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Create an account</h1>
          <p className='py-2'>Already have an account? <Link to='/signin' className='underline hover:text-[#00ff01]'>Sign in.</Link></p>
        </div>
        <form>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>First Name:</label>
            <input className='p-3 rounded-md' type="text" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Last Name:</label>
            <input className='p-3 rounded-md' type="text" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address:</label>
            <input className='p-3 rounded-md' type="email" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password:</label>
            <input className='p-3 rounded-md' type="password" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Confirm Password:</label>
            <input className='p-3 rounded-md' type="password" />
          </div>
          <div className='flex py-2'>
            <input className='p-3 mr-4 cursor-pointer text-[#00ff01] rounded-md' type="checkbox"/>
            <label className='py-2 font-medium'>Sign Up for Newsletter</label>
          </div>
          <button className='w-full py-4 my-2'>Create account</button>
          <Link to='/'><button className='w-full py-4 my-2'>Back Home</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup