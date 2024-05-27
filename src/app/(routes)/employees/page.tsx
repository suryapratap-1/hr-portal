import { Employee, columns } from "./[id]/columns"
import { DataTable } from "@/components/data-table"
import { employeeData } from "@/test"

export default async function EmployeePage() {

    return (
        <div className="container mx-auto py-10">
            <h1 className="font-bold text-xl text-inherit">Employee Lists</h1>
            <DataTable columns={columns} data={employeeData} />
        </div>
    )
}
