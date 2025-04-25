
'use client'

import React from 'react';
import { useSidebar } from '../context/SidebarContext'; 
import Image from 'next/image';

const SidebarToggle = () => {
  const { handleSidebarToggle } = useSidebar(); 
  return (
    <button onClick={handleSidebarToggle} className="p-2 lg:hidden">
      <Image src="/images/grid-4.png" width={24} height={24} alt="Toggle Sidebar" />
    </button>
  );
};

export default SidebarToggle;
