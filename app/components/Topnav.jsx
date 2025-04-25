'use client'
import React from 'react'
import { useState } from 'react'
import SidebarToggle from './SidebarToggle'

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div>
      <div style={{ boxShadow: '0px 2px 4px 0px #00000010' }} className='h-[82px] flex items-center justify-end gap-4 pe-10 bg-white'>

      <div className='me-auto'>
      <SidebarToggle /> 

      </div>

          <img src="/icons/notifications.png" alt="notification" className='me-6' />

          <div className='w-[44px] h-[44px] bg-[#8B72FC] rounded-full grid place-items-center'>
              <img src="/icons/Group 448.png" alt="" />
          </div>
          <div>
              <p className='text-[14px] text-[#404040]'>Techrity  Foun...</p>
              <small className='text-[#53547B] text-[12px]'>Member</small>
          </div>
          <img src="icons/Frame 1321318580.png" alt="" onClick={toggleSidebar} />




      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 backdrop-blur-md z-40"
        ></div>
      )}

      {/* Widget Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[300px] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-[#6F01D0]">Manage Widget</h2>
            <button onClick={toggleSidebar} className="text-xl">&times;</button>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Personalize your dashboard by managing widgets.
          </p>

          <form className="flex flex-col gap-4 text-sm">
            {[
              'Programs',
              'Group Calls',
              'Mentors',
              'Recent Activities',
              'Application',
              'Earnings',
              'Forum',
              'Program Analysis',
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between border-b border-[#F1EFEF] pb-1">
                <div className="flex items-center gap-2">
                  <span className="text-[12px]">☰</span>
                  {item}
                </div>
                <input type="checkbox" defaultChecked={idx < 4} />
              </label>
            ))}
          </form>

          <div className="mt-6 flex justify-between">
            <button className="bg-[#6F01D0] text-white text-sm px-4 py-1 rounded">
              Save Changes
            </button>
            <button className="text-[#6F01D0] border border-[#6F01D0] text-sm px-4 py-1 rounded">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topnav