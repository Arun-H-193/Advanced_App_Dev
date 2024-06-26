import React from 'react'
import Navbar from '../components/user/Navbar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Weblayout = () => {
  const Navigate = useNavigate()
    useEffect(() => {
        const checkAuth = async () => {
            if (!authService.isLoggedIn() || authService.getUserRole() !== "User") {
                Navigate('/login');
            }
        };
        checkAuth();
    }, [Navigate]);
  return (
    <>
    <div className='h-screen w-screen p-0  m-0 flex flex-col  overflow-x-hidden'>
        <Navbar/>
        <div className='flex flex-col overflow-y-scroll overflow-x-hidden'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Weblayout