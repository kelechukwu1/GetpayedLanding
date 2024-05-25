import { FooterButton } from "@/components/FooterButton";
import { LandingPageForm } from "@/components/LandingPageForm";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="backdrop-blur-sm h-screen flex flex-col justify-center items-center relative">
      <Button className="mb-5 rounded-full xs:text-xs text-sm border-t border-stone-500 bg-customGray hover:bg-customGray text-extralight text-gray-300 z-10">
        Waitlist v1 • Coming Soon
      </Button>
      <div className="relative flex flex-col gap-y-5 px-5 w-full md:w-[50rem] lg:w-[65rem] lg:min-w-[40rem] xs:mb-16 mb-52 md:mb-20">
        <Typography
          className="bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-400 text-center scroll-m-20 text-4xl xs:text-2xl tracking-tight md:text-5xl lg:text-7xl font-medium md:px-40 text-balance z-50"
          text="Your paycheck but with super powers"
        />
        <Typography
          className="text-center xs:text-sm text-lg font-light text-stone-200 md:px-44 lg:px-56 z-10"
          text="Wagestack is a programable salary wallet designed for employees and integrates well with your favorite payroll platforms"
        />
        <LandingPageForm />
      </div>
      <FooterButton />

      <div className="flex justify-center absolute w-full top-0 left-1/2 transform -translate-x-1/2">
        <Image
          className="w-full"
          src="/Gradient.png"
          alt="Bright Light"
          width={900}
          height={900}
          priority={true}
        />
      </div>
    </main>
  );
}
