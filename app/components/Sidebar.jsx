
'use client'

import React from 'react';
import { useSidebar } from '../context/SidebarContext'; 
import { sidebarLinks } from '../constants'; 
import { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const { isSidebarVisible, handleSidebarToggle } = useSidebar(); 

  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    }

  return (
    <div>
      <div
        className={`fixed top-0 left-0 bottom-0 w-[240px] bg-[#340260] pt-7 ps-6 pe-4 transition-all duration-300 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:block`}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/images/Frame 1171276268.png"
            width={116}
            height={27}
            alt=""
          />
          <Image
            src="/images/grid-4.png"
            width={24}
            height={24}
            alt="Toggle Sidebar"
            onClick={handleSidebarToggle} 
          />
        </div>

        <div className="sidebar_list mt-10">
          <nav>
            <ul className="space-y-1">
              {sidebarLinks.map((link, index) => (
                <li
                key={link.href + index}
                className={`flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[#fff] text-[#C2C2C2] hover:text-[#1F0954] transition-colors duration-300 cursor-pointer font-medium ${
                  index === 0 ? 'bg-[#fff] text-[#1F0954]' : '' 
                }`}
                >
                  {link.comingSoon && (
                    <img
                      src="/icons/coming-soon.png"
                      alt=""
                      className="absolute right-15 -mt-8"
                    />
                  )}
                  {link.icon}
                  <a href={link.href} className="block">
                    <p className="text-[12px]">{link.label}</p>
                  </a>
                </li>
              ))}

              <div className="bg-[#FFFFFF1F] p-3 mt-5 rounded-lg">
                <img src="/icons/user-tag.png" alt="" />
                <p className="text-[12px] text-white my-2">
                  Got some questions, enquiries or need help?
                </p>
                <a href="#" className="text-[10px] text-[#F0C074] border-b-1">
                  Visit Mently Help Desk Here
                </a>
              </div>

              <div className="flex my-5 justify-between items-center">
            <p className='text-[12px] text-[#F2F2F2]'>Switch to Classic Mode</p>

            <label className="relative inline-block w-8 h-3 cursor-pointer">
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-0 h-0"
                    checked={isChecked}
                    onChange={handleToggle}
                />
                <div
                    className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300 ease-in-out ${
                    isChecked ? 'bg-white shadow-[inset_0_0_0_2px_#ccc]' : 'bg-gray-300 shadow-[inset_0_0_0_2px_#ccc]'
                }`}
                >
            <div
                className={`absolute top-[1px] left-[1px] w-2.5 h-2.5 bg-[#1F0954] rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                    isChecked ? 'translate-x-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.2)]': ''
                }`}
            ></div>
        </div>
        </label>
          </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
