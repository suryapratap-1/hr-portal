"use client";
import Sidemenu from "@/components/Sidemenu";
import { usePathname } from "next/navigation";

export default function routesLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const path = usePathname()

    return (
        <section>
            <div className="flex">
                {
                    path.includes("/notification") ? undefined : <Sidemenu />
                }
                {children}
            </div> 
        </section>
    );
}
