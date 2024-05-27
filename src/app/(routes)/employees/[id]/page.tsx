import React from 'react'
import { employeeData } from '@/test'
import { Employee, columns } from "./columns"
import { DataTable } from "@/components/data-table"
import Image from 'next/image'

const page = ({ params }: {params: {id: string}}) => {
    const name = decodeURIComponent(params.id)

    const employee = employeeData.filter(emp => emp.name == name)

    return (
        <div className='p-5'>
            {employee.map((emp) => (
                <div key={emp.id} className='flex flex-col gap-6'>
                    <h1 className='text-2xl font-semibold'>{emp.name}</h1>
                    <div className='w-20 h-20 rounded-full bg-blue-500' />
                    <DataTable columns={columns} data={employee} />
                </div>
            ))}
        </div>
    )
}

export default page