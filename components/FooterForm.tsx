"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterForm() {
  return (
    <div className="flex justify-center w-full z-10">
      <div className="space-y-8 iphone5 md:w-[25rem]">
        <Link href={"/next"} className="relative flex justify-center w-full">
          <Button className="bg-customGray hover:bg-slate-900 transition duration-300 smallText text-xs font-light w-full smallPadding py-6 rounded-full pr-28 flex items-center text-center justify-center">
            What&apos;s next after 8000 users @wagestack
            <div className="bg-black px-3 smallPadding py-2 rounded-full text-xs font-light absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 flex items-center">
              <span className="smallText">Read more </span>
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
