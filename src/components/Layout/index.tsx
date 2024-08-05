import React, { ReactNode } from 'react';
import Nav from '@/components/Layout/AppNav';
import { Outlet } from 'react-router-dom';
import Header from './AppHeader';
import Footer from './AppFooter';
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className='fixed top-0 w-full'>
        <Header />
      </div>
      <div className='flex fixed w-full top-[4.60rem]'>
        <div className=''>
          <Nav />
        </div>
        <div className='w-full h-screen overflow-scroll'>
          <div className='min-h-screen'>
            {children || <Outlet />}
          </div>
          <Footer />
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default Layout;
