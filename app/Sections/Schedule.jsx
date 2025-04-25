import React from 'react'
import Image from 'next/image'
import { events } from '../constants';
import EventCard from '../components/Eventcard';
import { students } from '../constants'; 
import StudentCard from '../components/StudentCard';
import {AddCircle } from "iconsax-react";
import { teamMembers } from '../constants';
import { notifications } from '../constants';

const Schedule = () => {
  return (
    <div>
        <div className='bg-white rounded-[12.04px] pb-2 lg:w-[700px] ipad-pro-width'>
            <div className='flex justify-between  p-4'>
                <div className="flex items-center gap-4">
                    <Image
                        src="/icons/Vector.png"
                        alt="Logo"
                        width={18}
                        height={12}
                        className=""
                    />    
                    <p className='font-bold text-[#B0B0B0]'>Group Calls</p>
                </div>
                <div className="font-[600] flex items-center gap-5">
                    <p className='text-[#6F01D0] '>See all</p>
                    <Image
                        src="/icons/tdesign_more.png"
                        alt="Logo"
                        width={18}
                        height={18}
                        className=""
                    />    
                </div>
            </div>
            <div className="flex gap-1.5 overflow-x-scroll scrollbar-hide">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>

        
        </div>
            <div className='flex mt-3 gap-3 flex-col md:flex-row ipad-pro-portrait'>
                <div className='basis-[55%] bg-white p-3 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-3">
                            <Image
                            src="/icons/vector.png"
                            width={20}
                            height={20}
                            alt='menu'
                            />

                            <p className='text-[16px] font-semibold text-[#B0B0B0]'>Applications</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='text-[#6F01D0] text-[14px] font-semibold'>See all</p>
                            <Image
                            src="/icons/tdesign_more.png"
                            width={20}
                            height={20}
                            alt='menu'
                            />
                        </div>
                    </div>
                    <div className="mentors pb-6 border-b border-[#DBDBDB]">
                        <p className='p-5 text-[10px] text-[#7D8DA6] font-[400]'>Mentors</p>
                        <div className="flex justify-between items-center">
                            <input type="checkbox" />

                            <Image
                            src="/images/07f054838a4e99808eed4d84c664f26266a95f18.png"
                            width={30}
                            height={30}
                            alt='mentor'
                            className='rounded-full'
                            />

                            <div>
                                <p className='text-[14.4px]'>Maxwell Smith</p>
                                <p className='text-[10px] text-[#7D8DA6]'>maxwellsmith@gmail.com</p>
                            </div>

                            <div className='flex gap-1'>
                                <button className='bg-[#FFEDED] p-2 text-[#D83535] border border-[#D09696] rounded text-[9.77px] px-4' >Reject</button>
                                <button className='bg-[#6F01D0] p-2 text-[#FFFFFF] rounded text-[9.77px] px-4' >Accept</button>
                            </div>

                        </div>
                            <div className="flex text-[8.65px] justify-between lg:ps-10 gap-2 lg:gap-0 mt-4">
                                <p className='border-[0.86px] bg-[#DDCEEE] border-[#DDCEEE] text-[#9985A7] p-1 px-2 rounded-[5.19px]'>Product Designer</p>
                                <p className='border-[0.86px]  bg-[#E8FDFB] border-[#A1BDBA] text-[#58948E] p-1 px-2 rounded-[5.19px]'>4years Experience</p>
                                <p className='border-[0.86px]  bg-[#E3ECF9] border-[#E3ECF9] text-[#8196B5] p-1 px-2 rounded-[5.19px]'>🇳🇬 Lagos, Nigeria</p>
                                <p className='border-[0.86px]  bg-[#F4F4F4] border-[#C8C8C8] text-[#595564] p-1 px-2 rounded-[5.19px]'>GMT +1</p>
                            </div>
                    </div>
                    <div className='h-[400px] overflow-y-scroll scrollbar-hide'>
                        {students.map((student, index) => (
                            <StudentCard key={index} student={student} />
                        ))}
                    </div>
                </div>
                
                <div className='basis-[45%]'>
                    <div className="space-y-2">

                            <div className="bg-white p-4 rounded-md">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/icons/Vector.png"
                                            width={20}
                                            height={20}
                                            alt='menu'
                                        />
                                        <p className='text-[16px] font-[700] text-[#B0B0B0]'>Mentors</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <AddCircle size="32" color="#9D92A6"/>

                                        <Image
                                            src="/icons/tdesign_more.png"
                                            width={20}
                                            height={20}
                                            alt='menu'
                                            />
                                    </div>

                                </div>

                            <div className="space-y-4">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="flex items-center justify-between border-b border-[#F3F3F3] pb-2">
                                    <div className="flex items-center gap-2">
                                        <Image
                                        src={member.image}
                                        width={40}
                                        height={40}
                                        alt={member.name}
                                        className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                        <div className="font-medium text-[14.4px]">{member.name}</div>
                                        <div className="text-[10px] text-gray-500">{member.role}</div>
                                        </div>
                                    </div>
                                    <button className="bg-[#6F01D0] text-white px-4 py-1 text-sm rounded-[16px] text-[12px]">
                                        Message
                                    </button>
                                    </div>
                                ))}

                                <button className="w-full bg-[#DDD6FB] text-[#6F01D0] font-[600] mt-2 py-1.5 px-4 rounded-[24px]">See all</button>
                            </div>
                            </div>
                        
                        <div className=" mt-3">
                            <div className="px-4 pt-4 bg-white rounded-md pb-8">
                                <div className="flex justify-between items-center mb-8">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src="/icons/Vector.png"
                                                width={20}
                                                height={20}
                                                alt='menu'
                                            />
                                            <p className='text-[16px] font-[700] text-[#B0B0B0]'>Recent Activities</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <p className='text-[#6F01D0] text-[14px] font-[600]'>See all</p>

                                            <Image
                                                src="/icons/tdesign_more.png"
                                                width={20}
                                                height={20}
                                                alt='menu'
                                                />
                                        </div>

                                </div>
                                <div className="space-y-6">
                                    {notifications.map((note, index) => (
                                        <div
                                        key={index}
                                        className="flex items-start space-x-3 border-b border-[#F1EFEF] pb-2"
                                        >
                                        <Image
                                            src={note.image}
                                            width={20}
                                            height={20}
                                            alt={note.title}
                                            className="rounded-full w-7 h-7 object-cover"
                                        />
                                        <div>
                                            <div className="font-[700] text-[14px]">{note.title}</div>
                                            <div className="text-[12px] text-[#707991] font-[400]">
                                            {note.description}
                                            </div>
                                            <div className="text-[12px] text-[#707991] leading-[20px]">
                                            {note.time}
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Schedule