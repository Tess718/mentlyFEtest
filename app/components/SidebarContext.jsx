
import React, { createContext, useState, useContext } from 'react';


const SidebarContext = createContext();


export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible((prev) => !prev); 
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, handleSidebarToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebar = () => useContext(SidebarContext);
