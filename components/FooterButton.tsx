"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterButton() {
  return (
    <Link href={"/next"} className="z-10 flex justify-center">
      <Button className="xs:space-x-2 md:space-x-5 flex justify-between bg-customGray hover:bg-stone-900 transition duration-300 text-xs md:text-sm font-normal xs:py-2 px-3 py-6 rounded-full items-center text-center text-stone-300 border-t border-stone-500">
        <span className="text-[11px] md:text-xs">
          What&apos;s next after 8000 users @wagestack
        </span>
        <div className="bg-black xs:px-[6px] px-3 xs:py-1 py-2 rounded-full text-xs font-normal flex items-center">
          <span className="xs:text-[10px]">Read more </span>
          <svg
            className="h-2 w-2 ml-1"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.29587 4.99924L0.583374 1.28674L1.64387 0.226238L6.41687 4.99924L1.64387 9.77224L0.583374 8.71174L4.29587 4.99924Z"
              fill="#fff"
            />
          </svg>
        </div>
      </Button>
    </Link>
  );
}
