import { useState } from 'react'
import { ShieldCheckIcon, IdentificationIcon } from '@heroicons/react/outline'
import { LockClosedIcon } from '@heroicons/react/solid'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import React from 'react'

const Register = () => {
  const notify = () => toast.success('Registered Successfully!')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    axios
      .post('http://localhost:3001/signup', {
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res)
        navigate('/login')
        notify()
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='p-5'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold text-[#424B5A]'>
              Welcome Recruiter.
            </h2>
            <h4 className='text-[#424B5A] mt-4'>Sign up to find applicants!</h4>
          </div>

          <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='flex block border border-grey-light bg-white w-full p-3 mb-4 rounded-3xl pl-5 shadow-xl'>
                <IdentificationIcon className='w-8 flex justify-between items-center text-gray-500' />
                <input
                  required
                  type='text'
                  className='w-full p-3 ml-3 rounded-3xl pl-5'
                  placeholder='Email Address'
                  value={email}
                  id='email'
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className='flex block border border-grey-light bg-white w-full p-3 mb-4 rounded-3xl pl-5 shadow-xl'>
                <LockClosedIcon className='w-8 flex justify-between items-center text-gray-500' />
                <input
                  required
                  type='password'
                  className='w-full p-3 ml-3 rounded-3xl pl-5'
                  placeholder='Password'
                  id='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className='flex block border border-grey-light bg-white w-full p-3 mb-4 rounded-3xl pl-5 shadow-xl'>
                <ShieldCheckIcon className='w-8 flex justify-between items-center text-gray-500' />
                <input
                  required
                  type='password'
                  className='w-full p-3 ml-3 rounded-3xl pl-5'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  id='password'
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className='text-white bg-[#707FDD] w-full text-center py-3 rounded-2xl  my-1 shadow-xl'
                onClick={notify}
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  )
}

export default Register
