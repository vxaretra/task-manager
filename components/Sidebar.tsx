"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full min-h-screen p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 border-r border-black">
      <nav className="space-y-8 text-sm">
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