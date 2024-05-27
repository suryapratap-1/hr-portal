"use client"

import { DatePickerDemo } from "@/components/Pick-date"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: string
  name: string
  email: string
  joined: string
  technology: string
  position: "Intern" | "Fulltime"
  present: string
  absent: string
  seek_leaves: string
  paid_leaves: string
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
          {column.getIsSorted() === "asc" ? " Asc" : " Desc"}
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "joined",
    header: "Joined",
  },
  {
    accessorKey: "technology",
    header: "Technology",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "present",
    header: "Present",
  },
  {
    accessorKey: "absent",
    header: "Absent",
  },
  {
    accessorKey: "seek_leaves",
    header: "Seek leave",
  },
  {
    accessorKey: "paid_leaves",
    header: "Paid leave",
  },
]
