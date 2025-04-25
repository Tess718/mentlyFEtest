

'use client';

import React, { createContext, useContext, useState } from 'react';


const SidebarContext = createContext();


export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  const handleSidebarToggle = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, handleSidebarToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
};
