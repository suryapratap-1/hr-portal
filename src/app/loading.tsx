import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        // <div className='min-h-screen text-4xl flex justify-center items-center'>
        //     Loading...
        // </div>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
    )
}

export default loading