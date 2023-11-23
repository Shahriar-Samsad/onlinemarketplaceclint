"use client"
import FeedBack from '@/components/Home/FeedBack';
import Menubar from '@/components/Home/Menubar';
import Product from '@/components/Home/Product';
import Slider from '@/components/Home/Slider';
import Link from 'next/link';
import { useEffect, useState } from 'react';
 
const Layout = ({children}) => {
    

    return (
        <div>
              <nav className="bg-zinc-200 p-4 fixed top-0 w-full z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          
          <div className="  flex space-x-4">
            <Link href="/" className="text-black hover:text-neutral-500 font-semibold">
              Home 
            </Link>
            <Link href="/dashboard/product" className="text-black hover:text-neutral-500 font-semibold">
              Post Product 
            </Link>
           
            <Link href="/dashboard/post" className="text-black hover:text-neutral-500 font-semibold">
              Blog
            </Link>
           
            <Link href="/contact" className="text-black hover:text-neutral-500 font-semibold">
              Contact
            </Link>
            
          </div>
          
        </div>
        
      </nav>
            {children}
           
           
        </div>
    );
};

export default Layout;