import Programs from "./Sections/Programs";
import Schedule from "./Sections/Schedule";
import Topnav from "./components/Topnav";
import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex-1 bg-[#F9F7FF] ">
      <Topnav />
      <div className="lg:ps-14 lg:pe-10 px-6">
        <div className="flex items-center justify-end gap-6 my-4">
          <Image 
            src="/icons/fluent.png"
            alt="Logo"
            width={24}
            height={18}
            className=""
          />
          <Image 
            src="/icons/material.png"
            alt="Logo"
            width={21}
            height={19}
            className=""
          />
          <p className="text-[16px] text-[#1F0954] font-bold">Manage Widgets</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-[#6F01D0] rounded-[4px] lg:py-2 py-4 px-5 text-center max-md:text-center">
          <h3 className="text-[22.21px] text-white font-[600]">Welcome Aboard, Blessing 👋</h3>
          <p className="text-[18px] text-[#BDBDBD] font-[600] max-md:py-2">We’re thrilled to have you join Techrity Team!</p>
          <button className="px-4 py-2 bg-white rounded-[8px] text-[16px] font-[700]">Update Profile</button>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-4 mt-2">
          <div className="basis-[50%]">
            <Programs />
          </div>
          <div className="basis-[50%]">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}
