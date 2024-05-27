"use client";
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegIdCard } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidemenu = () => {
    const path = usePathname();

    return (
        <div className='dark:bg-[#020817] w-[15vw] h-[calc(100vh-4rem)] py-5 bg-white border-r border-[#E8E8E8] dark:border-blue-950 shadow dark:shadow-none'>
            <div className='px-6 py-2.5 flex gap-2 items-center'>
                <Image 
                    src='/Profile.jpg'
                    alt='profile image'
                    width="40"
                    height="40"
                    style={{width: "auto", height: "auto"}}
                    className='rounded-full aspect-square object-cover'
                />  
                <div>
                    <p>HR Name</p>
                    <p className='text-xs'>HR Manager</p>
                </div>
            </div> 
            <div className='pt-8 pb-6 flex flex-col  border-b border-[#E8E8E8] dark:border-none'> 
                <Link href={"/dashboard"} 
                    className={cn(`py-2.5 flex items-center cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/dashboard") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                    )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/dashboard") && "opacity-100"
                    )}/>
                    <div className='px-7 flex items-center gap-2 '>
                        <LuLayoutDashboard />
                        <div className='font-semibold' >Dashboard</div>
                    </div>
                </Link>

                <Link href={"/finance"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/finance") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/finance") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <IoStatsChartOutline />
                        <p className='font-semibold'>Finance</p>
                    </div>
                </Link>

                <Link href={"/employees"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/employees") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/employees") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <FaRegIdCard />
                        <p className='font-semibold'>Employees</p>
                    </div>
                </Link>

                <Link href={"/company"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/company") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/company") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <HiOutlineOfficeBuilding />
                        <p className='font-semibold'>Company</p>
                    </div>
                </Link> 

                <Link href={"/candidate"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/candidate") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/candidate") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <IoPersonCircleOutline />
                        <p className='font-semibold'>Candidate</p>
                    </div>
                </Link>

                <Link href={"/calender"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/calender") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/calender") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <SlCalender />
                        <p className='font-semibold'>Calender</p>
                    </div>
                </Link> 
            </div>

            <div className='pt-3'>
                <Link href={"/profile"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/profile") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/profile") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <IoPersonOutline />
                        <div className='font-semibold'>Profile</div>
                    </div>
                </Link>
                <Link href={"/settings"} 
                    className={cn(`py-2.5 flex items-center gap-2 cursor-pointer dark:text-inherit dark:hover:bg-[#e8e8e81f]`, 
                    path.includes("/settings") && "text-blue-500 bg-gray-200 dark:bg-inherit dark:text-blue-500"
                )}>
                    <div className={cn(`w-1 h-6 rounded-r-md bg-blue-500 opacity-0`, 
                        path.includes("/settings") && "opacity-100"
                    )}/>
                    <div className='px-6 flex items-center gap-2 '>
                        <IoSettingsOutline />
                        <div className='font-semibold'>Settings</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidemenu