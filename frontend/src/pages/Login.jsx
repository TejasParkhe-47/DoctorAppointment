import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { token, backendurl, settoken } = useContext(AppContext)

  const [state, setstate] = useState('sign up')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    console.log("onsumbit handler")
    try {
      if (state === 'sign up') {
        const { data } = await axios.post(backendurl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          settoken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendurl + '/api/user/login', { password, email })
        if (data.success) {
          console.log(data.token)
          localStorage.setItem('token', data.token)
          settoken(data.token)
        } else {
          toast.error(error.message)
        }
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-300 to-purple-400 px-4'>
      <div className='flex flex-col gap-4 p-8 w-full max-w-md rounded-xl shadow-xl bg-white text-sm text-zinc-700'>
        <h2 className='text-3xl font-bold text-purple-700 text-center'>
          {state === 'sign up' ? "Create Account" : "Login"}
        </h2>
        <p className='text-center text-zinc-500'>
          Please {state === 'sign up' ? "sign up" : "login"} to book appointment
        </p>

        {state === 'sign up' && (
          <div className='w-full'>
            <label className='block mb-1 font-medium'>Full Name</label>
            <input
              className='w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
              type="text"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
        )}

        <div className='w-full'>
          <label className='block mb-1 font-medium'>Email</label>
          <input
            className='w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>

        <div className='w-full'>
          <label className='block mb-1 font-medium'>Password</label>
          <input
            className='w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          type='submit'
          className='w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-sm'
        >
          {state === 'sign up' ? "Create Account" : "Login"}
        </button>

        <p className='text-center text-zinc-600 text-sm'>
          {state === 'sign up' ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setstate('login')}
                className='text-purple-700 font-medium underline cursor-pointer'
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setstate('sign up')}
                className='text-purple-700 font-medium underline cursor-pointer'
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
      <ToastContainer />
    </form>
  )
}

export default Login
