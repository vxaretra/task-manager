"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  show: boolean
}

export default function Sidebar({ show } : SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`fixed min-h-full w-64 bg-white z-40 transition-transform ${show ? "" : "-translate-x-full"} sm:translate-x-0 border-r border-black`}>
      <nav className="p-4 space-y-8 text-sm">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold tracki uppercase dark:text-gray-400">Dashboard</h1>
          <div className="flex flex-col space-y-1">
            <Link className={`text-lg rounded px-2 ${pathname === "/" ? "bg-gray-200" : ""}`} href={"/"}>Home</Link>
            <Link className={`text-lg rounded px-2 ${pathname === "/tasks" ? "bg-gray-200" : ""}`} href={"/tasks"}>Tasks</Link>
          </div>
        </div>
      </nav>
    </aside>
  )
}