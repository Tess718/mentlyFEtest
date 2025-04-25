
import React from 'react';
import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './components/Sidebar';;
import './globals.css';  

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="flex min-h-screen justify-between flex-col lg:flex-row">
        <SidebarProvider> 
          <div className="flex min-h-screen flex-col lg:flex-row">
              <Sidebar />
            <div className="lg:w-[82%] lg:ms-auto">
             
              {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default Layout;
