import { Employee, columns } from "./columns"
import { DataTable } from "@/components/data-table"
import { employeeData } from "@/test"

// async function getData(): Promise<Employee[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

export default async function Dashboard() {
//   const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <h1 className="font-bold text-xl text-inherit">Employee Lists</h1>
            <DataTable columns={columns} data={employeeData} />
        </div>
    )
}