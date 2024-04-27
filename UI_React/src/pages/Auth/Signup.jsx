import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from '../../services/api';
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate()
    const [registerdata, setRegisterdata] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setRegisterdata({ ...registerdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(registerdata);
        const res = await SignUp(registerdata.name, registerdata.email, registerdata.phone, registerdata.address, registerdata.password);

        if (res.data==="User registered successfully.") {

            toast.success("Signup Success")
            setTimeout(() => {
                navigate('/login')
            }, 5000)
        }
        else {
            toast.error(res.data)
            // console.log(res.data)
        }

    }

  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="card w-80 h-auto p-6 text-center flex flex-col items-center justify-center gap-6 border border-black rounded-xl">
        <span className="card__title text-4xl font-bold text-gray-800 mb-5">Sign Up</span>
        <form onSubmit={handleSubmit} className="card__form flex flex-col gap-4">
          <div className="flex flex-col ml-3">
            <label htmlFor="name" className="text-gray-700 text-left mb-2">Name</label>
            <input id="name" name="name" className="input-field w-[275px] h-[30px] rounded-lg border border-black-300 mb-4" type="text" placeholder="Name" onChange={handleChange} />
          </div>
          <div className="flex flex-col ml-3">
            <label htmlFor="email" className="text-gray-700 text-left mb-2">Email</label>
            <input id="email" name="email" className="input-field w-[275px] h-[30px] rounded-lg border border-black-300 mb-4" type="text" placeholder="Email" onChange={handleChange} />
          </div>
          <div className="flex flex-col ml-3">
            <label htmlFor="password" className="text-gray-700 text-left mb-2">Password</label>
            <input id="password" name="password" className="input-field w-[275px] h-[30px] rounded-lg border border-black-300 mb-4" type="password" placeholder="Password" onChange={handleChange} />
          </div>
          <button type="submit" className="btn-login bg-black text-white h-[30px] w-[100px] rounded-lg">Sign Up</button>
        </form>
        <div className="text-gray-600">Already have an account? <Link to='/login' className="text-blue-500 font-semibold">Login</Link></div>
      </div>
    </div>
    <Toaster />
    </>
  );
};
