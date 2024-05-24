import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="px-5 md:px-20 py-5 border-b border-gray-500">
        <Link
          className="flex justify-center gap-1 items-center"
          href="/"
          passHref
        >
          <Image alt={"logo"} src={"/Logo.svg"} width={20} height={20} />
          <h1 className="font-semibold text-sm text-gray-300">Wagestack</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;