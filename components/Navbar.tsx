import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed backdrop-blur-sm z-50 w-full">
      <nav className="px-5 md:px-20 py-5 border-b border-stone-800 border-opacity-50 z-30">
        <Link
          className="flex justify-center gap-1 items-center"
          href="/"
          passHref
        >
          <Image alt={"logo"} src={"/Logo.svg"} width={30} height={30} />
          <h1 className="font-semibold text-base text-stone-300 z-50">
            Wagestack
          </h1>
        </Link>
      </nav>
      <div className="absolute top-full left-[55%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          className="h-[0.15rem]"
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
