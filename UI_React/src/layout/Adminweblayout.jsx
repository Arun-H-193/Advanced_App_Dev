import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'
import Sidebar from '../components/Admin/Sidebar'
import { useNavigate } from 'react-router-dom'

const Adminweblayout = () => {
  const Navigate = useNavigate()
    useEffect(() => {
        const checkAuth = async () => {
            if (!authService.isLoggedIn() || authService.getUserRole() !== "Admin") {
                Navigate('/login');
            }
        };
        checkAuth();
    }, [Navigate]);
  return (
    <div>
    <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-4">
          <Outlet/>
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Adminweblayout