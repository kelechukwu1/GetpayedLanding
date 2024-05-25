"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterButton() {
  return (
    <div className="flex justify-center w-full z-10">
      <div className="space-y-8 xs:w-[18rem] md:w-[26rem]">
        <Link href={"/next"} className="relative flex justify-center w-full">
          <Button className="bg-customGray hover:bg-stone-900 transition duration-300 xs:text-[10px] text-xs md:text-sm font-light xs:w-[19rem] w-full xs:py-2 py-6 rounded-full xs:pr-24 pr-28 flex items-center text-center justify-center text-stone-300 border-t border-stone-500">
            What&apos;s next after 8000 users @wagestack
            <div className="bg-black xs:px-2 px-3 xs:py-1 py-2 rounded-full text-xs font-light absolute top-1/2 xs:right-0 right-2 md:right-3 transform -translate-y-1/2 flex items-center">
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
      </div>
    </div>
  );
}
