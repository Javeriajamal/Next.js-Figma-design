/*'use client'

import { SidebarButtons } from "./Sidebar-buttons";
import { Contact, LucideHome } from "lucide-react";
import { SidebarItems } from "@/Types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarDesktopProps {
    sidebarItems: SidebarItems;
}

export function SidebarDesktop (props: SidebarDesktopProps) {

    const pathname = usePathname ();

    return (
        <aside className="w-[270px] max-w-xs h-screen bg-zinc-900 text-white fixed right-0 top-0 z-40 border-r">
            <div className="h-full px-3 py-4">
                <div className="mt-16">
                    <div className="flex flex-col gap-6 w-full">


                    {props.sidebarItems.links.map((link, index) => (
                        <Link key={index} href={link.href}>

                            <SidebarButtons 

                            variant={pathname === link.href ? 'Secondary' : 'Ghost'}
                            icon={link.icon}>{link.label}

                            </ SidebarButtons>

                        </Link>
            ))}

                    </div>
                </div>

            </div>

        </aside>
    )
}*/