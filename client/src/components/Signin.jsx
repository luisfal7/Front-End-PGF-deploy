import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const {signIn} = UserAuth()

  const validateForm = (form) => {
    let errors = {
      hasErrors: false
    }
    if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(form.email)) {
      errors.email = "Use a valid email";
      errors.hasErrors = true;
  }
  return errors
  }

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...user, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({ ...errors, hasErrors: true })
    await signIn(user.email, user.password)
    navigate('/account')
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
            <input name='email' onChange={handleChanges} className='p-3 rounded-md text-black' type="email" />
            {errors.email && (<p className='text-red-500'>{errors.email}</p>)}
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password:</label>
            <input name='password' onChange={handleChanges} className='p-3 rounded-md text-black' type="password" />
          </div>
          <button className='w-full py-4 my-2'>Sign In</button>
          <Link to='/'><button className='w-full py-4 my-2'>Back Home</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Signin