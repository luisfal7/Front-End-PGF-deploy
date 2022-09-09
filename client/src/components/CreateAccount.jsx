import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm: ''
  })
  const [errors, setErrors] = useState({})
  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const validateForm = (form) => {
    let errors = {
      hasErrors: false
    }
    if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(form.email)) {
      errors.email = "Use a valid email";
      errors.hasErrors = true;
    } else if (!/^(?=.*\d).{4,8}$/.test(form.password)) {
      errors.password = 'Password must be between 4 and 8 digits long and include at least one numeric digit'
      errors.hasErrors = true
    } else if (user.password !== user.confirm) {
      errors.confirm = 'The password and confirm password don´t match'
      errors.hasErrors = true
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
    await createUser(user.email, user.password)
    navigate('/account')
  }

  return (
    <div className="text-white bg-black h-screen">
      <div className='max-w-[700px] mx-auto p-4'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Create an account</h1>
          <p className='py-2'>Already have an account? <Link to='/signin' className='underline hover:text-[#00ff01]'>Sign in.</Link></p>
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
            {errors.password && (<p className='text-red-500'>{errors.password}</p>)}
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Confirm Password:</label>
            <input name='confirm' onChange={handleChanges} className='p-3 rounded-md text-black' type="password" />
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