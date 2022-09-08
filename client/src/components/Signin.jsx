import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className="text-white bg-black h-screen">
      <div className='max-w-[700px] mx-auto p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
          <p className='py-2'>Don't have an account yet? <Link to='/createaccount' className='underline hover:text-[#00ff01]'>Create account.</Link></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address:</label>
            <input onChange={(e) => setEmail(e.target.value)} className='p-3 rounded-md text-black' type="email" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} className='p-3 rounded-md text-black' type="password" />
          </div>
          <button className='w-full py-4 my-2'>Sign In</button>
          <Link to='/'><button className='w-full py-4 my-2'>Back Home</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Signin