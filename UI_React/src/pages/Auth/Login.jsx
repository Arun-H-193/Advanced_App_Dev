import React, {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { authService } from '../../services/auth';

export const Login = () => {
  const navigate = useNavigate()
  const checkRedirect = async () => {
    if (authService.getToken() !== null && authService.isLoggedIn()) {
        const userRole = authService.getUserRole();
        if (userRole !== null) {
            if (userRole === "Admin") {
                navigate('/admin/dashboard');
            } else if (userRole === "User") {
                navigate('/user/dashboard');
            } else {
                toast.error("Something went wrong");
            }
        }
    }
};

useEffect(() => {
    checkRedirect();
}, []);

const emailRef = useRef(null)
const passwordRef = useRef(null)
const handleLogin = async (e) => {
    e.preventDefault();
    const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value)
    if (res.status === 200) {
        authService.setToken(res.data.accessToken)
        toast.success("Welcome")
        setTimeout(() => {
            checkRedirect();
        }, 3000)

    }
};
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="card w-[500px] h-[400px] p-6 text-center flex flex-col items-center justify-center gap-6 border border-black rounded-xl">
        <span className="card__title text-4xl font-bold text-gray-800 mb-5">Login</span>
        <form onSubmit={handleLogin} className="card__form flex flex-col gap-4">
          <div className="flex flex-col ml-3">
            <label htmlFor="email" className="text-gray-700 text-left mb-2">Email</label>
            <input type="email" id="email" name="email" ref={emailRef} className="w-[275px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Email"/>
          </div>
          <div className="flex flex-col ml-3">
            <label htmlFor="password" className="text-gray-700 text-left mb-2">Password</label>
            <input type="password" id="password" name="password" ref={passwordRef} className="w-[275px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Password" />
          </div>
          <button type="submit" className="btn-login bg-black text-white h-[30px] rounded-lg">Login</button>
          
        </form>
        <div className="text-gray-600">Don't have an account? <Link to='/signup' className="text-blue-500 font-semibold">Sign Up</Link></div>
      </div>
    </div>
    <Toaster />
    </>
  );
};
