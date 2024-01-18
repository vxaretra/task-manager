"use client";

import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebar show={show} />
      <nav className="md:hidden border-b border-black p-2">
        <button>
          <Image
            src="/hamburger.svg"
            alt="next logo"
            width={32}
            height={32}
            onClick={() => setShow(!show)}
          />
        </button>
      </nav>
      <div className="p-4 sm:ml-64">{children}</div>
      <div
        className={`${
          show ? "md:hidden" : "hidden"
        } bg-gray-400 opacity-50 fixed inset-0 z-20`}
        onClick={() => setShow(false)}
      ></div>
    </>
  );
}
