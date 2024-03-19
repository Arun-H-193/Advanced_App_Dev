import React from 'react';
import { Book, PeopleFill, HouseFill } from 'react-bootstrap-icons'; // Icons from react-bootstrap-icons

const DashboardStats = () => {
  return (
    <>
      <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[64vw] gap-4'>
        {/* Total Courses */}
        <div className='flex flex-row h-40 w-1/4 shadow-md shadow-black-500/40 cursor-pointer hover:shadow-black-500'>
          <div className='h-full w-4/6 flex flex-col bg-black-200/10'>
            <div className='h-3/4 w-full flex justify-center items-center'>
              <h2 className='text-5xl font-bold'>20</h2>
            </div>
            <div className='h-2/6 w-full flex items-center justify-center'>
              <p className='font-semibold'>Total Courses</p>
            </div>
          </div>
          <div className='h-full w-2/4 flex items-center justify-center border-2 border-black-500/5'>
            <Book className='text-black-500' size={50} /> {/* Using Book icon from react-bootstrap-icons */}
          </div>
        </div>

        {/* Total Students */}
        <div className='flex flex-row h-40 w-1/4 shadow-md shadow-black-500/40 cursor-pointer hover:shadow-black-500'>
          <div className='h-full w-4/6 flex flex-col bg-black-200/10'>
            <div className='h-3/4 w-full flex justify-center items-center'>
              <h2 className='text-5xl font-bold'>8</h2>
            </div>
            <div className='h-2/6 w-full flex items-center justify-center'>
              <p className='font-semibold'>Total Students</p>
            </div>
          </div>
          <div className='h-full w-2/4 flex items-center justify-center border-2 border-black-500/5'>
            <PeopleFill className='text-black-500' size={50} /> {/* Using PeopleFill icon from react-bootstrap-icons */}
          </div>
        </div>

        {/* Total Institutions */}
        <div className='flex flex-row h-40 w-1/4 shadow-md shadow-black-500/40 cursor-pointer hover:shadow-black-500'>
          <div className='h-full w-4/6 flex flex-col bg-black-200/10'>
            <div className='h-3/4 w-full flex justify-center items-center'>
              <h2 className='text-5xl font-bold'>1000</h2>
            </div>
            <div className='h-2/6 w-full flex items-center justify-center'>
              <p className='font-semibold'>Total Institutions</p>
            </div>
          </div>
          <div className='h-full w-2/4 flex items-center justify-center border-2 border-black-500/5'>
            <HouseFill className='text-black-500' size={50} /> {/* Using HouseFill icon from react-bootstrap-icons */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
