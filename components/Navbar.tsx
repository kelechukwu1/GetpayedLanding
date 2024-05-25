import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="backdrop-blur-sm relative z-50">
      <nav className="px-5 md:px-20 py-5 border-b border-stone-700 z-50">
        <Link
          className="flex justify-center gap-1 items-center"
          href="/"
          passHref
        >
          <Image alt={"logo"} src={"/Logo.svg"} width={20} height={20} />
          <h1 className="font-semibold text-sm text-stone-300">Wagestack</h1>
        </Link>
      </nav>
      <div className="absolute top-full left-[55%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          className="h-[0.20rem]"
          src="/HorizontalDivider.png"
          alt="Horizontal Line"
          width={800}
          height={800}
          priority={true}
        />
      </div>
    </header>
  );
};

export default Navbar;
