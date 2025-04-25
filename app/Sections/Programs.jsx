"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { hostedCardData, programsData } from '../constants';

import UserChart from '../components/Userchart';


const Programs = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpentwo, setIsOpentwo] = useState(false);

  return (
    <div className='w-full flex md:flex-row md:items-start lg:items-stretch lg:flex-col justify-between flex-col'>
        <div className='bg-white rounded-[12.04px] p-4 h-[754px] overflow-y-hidden basis-[55%]'>
            <div className="flex items-center gap-4 justify-end mt-4 pe-3 mb-2">
                <p className='text-[#595564] text-[11.26px] font-[500]'>Filter</p>

                <div className="relative inline-block text-left">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[11.26px] border-[0.8px] border-[#E1E7EC] rounded-[3.22px] px-4 py-1 bg-white text-[#1F0954] font-[600] flex items-center gap-2"
                >
                    Active ˅
                </button>

                {isOpen && (
                    <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1 text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                    </ul>
                    </div>
                )}
                </div>
            </div>
          <div className="scrollbar-hide h-[650px] overflow-y-scroll">
              {programsData.map((program, index) => (
              <div
              key={index}
              className="card p-4 shadow-md rounded-[9.85px] mb-2.5"
              >
              <div
                  className="text_space flex rounded-[6.57px] p-3"
                  style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${program.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  }}
              >
                  <div className="flex-1">
                  <h3 className="text-white text-[16.42px] font-bold">
                      {program.title}
                  </h3>
                  <div
                      className="category rounded-[9.85px] w-fit px-3 h-fit py-0.5 mt-1"
                      style={{ backgroundColor: program.categoryColor }}
                  >
                      <p
                      className="text-[6.57px]"
                      style={{ color: program.categoryTextColor }}
                      >
                      ● {program.category}
                      </p>
                  </div>
                  </div>

                  <div>
                  <Image
                      src={program.icon}
                      alt="icon"
                      width={16}
                      height={16}
                  />
                  </div>
              </div>

              <p className="text-[10px] mt-1">{program.description}</p>

              <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                  <Image
                      src={program.avatars}
                      alt="avatars"
                      width={60.37}
                      height={13.91}
                  />
                  <p className="text-[8.34px] font-bold text-[#6C6C6C] ml-2">
                      Mentors
                  </p>
                  </div>

                  <div className="flex gap-1">
                  <button className="text-[8px] py-1 px-2 rounded-[2.63px] border-[0.66px] border-[#6F01D0] text-[#6F01D0]">
                      View Details
                  </button>
                  <button className="text-[8px] py-1 px-4 rounded-[2.63px] bg-[#6F01D0] text-white">
                      Analysis
                  </button>
                  </div>
              </div>
              </div>
          ))}

          <div className="hosted">
            {hostedCardData.map((data, index) => (
              <div key={index} className="card p-4 shadow-md rounded-[9.85px] mb-2.5">
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${data.bgImage}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="text_space flex rounded-[6.57px] p-3 h-28"
                >
                  <div className="flex-1">
                    <h3 className="text-white text-[16.42px] font-bold">{data.title}</h3>
                    <div
                      className="category mt-1 rounded-[9.85px] w-fit px-3 h-fit py-0.5"
                      style={{ backgroundColor: data.tag.bgColor }}
                    >
                      <p
                        className="text-[6.57px]"
                        style={{ color: data.tag.textColor }}
                      >
                        {data.tag.text}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] mt-1">{data.description}</p>

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={data.avatar}
                      alt="Avatar"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <p className="text-[8.34px] font-bold text-[#6C6C6C]">
                      Hosted By: {data.hostedBy}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    <button className="text-[8px] py-1 px-2 rounded-[2.63px] border-[0.66px] border-[#6F01D0] text-[#6F01D0]">
                      View Details
                    </button>
                    <button className="text-[8px] py-1 px-4 rounded-[2.63px] bg-[#6F01D0] text-white">
                      Analysis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>



        
        

        </div>
         <div className="users bg-[#E7DDFF4D] border-[1px] border-[#E1E7EC] rounded-[16px] mt-3 py-3 basis-[40%]">
            <div className="flex justify-between items-center border-b-[1px] border-[#E1E7EC] pb-2 px-3">
                <p>Users</p>

                <div className="relative inline-block text-left">
                <button
                    onClick={() => setIsOpentwo(!isOpentwo)}
                    className="text-[11.26px] border-[0.8px] border-[#E1E7EC] rounded-[3.22px] px-2 py-1 bg-transparent text-[#1F0954] font-[600] flex items-center gap-2"
                >
                    All ˅
                </button>

                {isOpentwo && (
                    <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1 text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                    </ul>
                    </div>
                )}
                </div>
            </div>
         <UserChart />
         </div>

    </div>
  )
}

export default Programs