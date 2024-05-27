"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiJirasoftware } from "react-icons/si";
import { ModeToggle } from './mode';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const path = usePathname();

    return (
        <nav className='dark:bg-inherit w-full h-16 pl-6 pr-16 py-5 flex gap-20 items-center justify-between bg-white border-b border-[#E8E8E8] dark:border-blue-950 shadow dark:shadow-none'>
            <div className='flex items-center gap-36'>
                <Link href={"/"}>
                    <div className='flex items-center gap-2 text-black cursor-pointer'>
                        <div>
                            <SiJirasoftware className=' text-2xl text-blue-600' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-2xl font-semibold dark:text-white'>Quotus</p>
                            <span className='text-xs text-gray-500'>Software solution</span> 
                        </div>   
                    </div>
                </Link>

                <div className='flex items-center px-4 bg-[#a7a7a717] rounded-full'>
                    <CiSearch className='rounded-l-full text-lg bg-transparent'/>
                    <input className='bg-transparent rounded-r-full py-1 px-2 outline-none'
                        id='search'
                        type="text" 
                        placeholder='Search...' 
                    />
                </div>

            </div>
            

            <div className='flex items-center gap-5'>
                {
                    path !== "/dashboard" &&
                    <Link href={"/dashboard"}>
                        <button className="px-2 py-1.5 border rounded-xl hover:bg-[#3B3F49] dark:border-[#3B3F49]">
                            Dashboard
                        </button>
                    </Link>
                }

                <ModeToggle />

                <Link href={"/notification"}>
                    <div className='p-2 rounded-xl bg-[#a7a7a758]'>
                        <IoIosNotificationsOutline className='text-2xl text-gray-600 dark:text-white' />
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar