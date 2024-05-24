import { FooterForm } from "@/components/FooterForm";
import { LandingPageForm } from "@/components/LandingPageForm";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center relative">
      <Image
        className="object-cover md:object-fill w-full h-full z-10 md:z-0"
        src="/Linear.png"
        alt="Background"
        layout="fill"
        priority={true}
      />

      <Button className="mb-5 rounded-full py-0 text-sm border border-gray-500 bg-customGray hover:bg-customGray text-extralight text-gray-300 z-10">
        Waitlist v1 • Coming Soon
      </Button>
      <div className="relative flex flex-col gap-y-5 px-5 w-full md:w-[30rem] lg:min-w-[40rem] lg:max-w-[40rem] mb-56 md:mb-20">
        <div className="absolute top-[-9rem] left-0 right-0 bottom-0 z-0 overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-black to-black opacity-70" />
          <Image
            className="object-cover w-full h-full md:rounded-full"
            src="/All.png"
            alt="Background stars"
            layout="fill"
            objectFit="cover"
            objectPosition="center bottom"
            priority={true}
          />
        </div>
        <Typography
          className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 text-center scroll-m-20 text-4xl tracking-tight lg:text-6xl font-semibold z-50"
          text="Your paycheck but with super powers"
        />
        <Typography
          className="text-center scroll-m-20 text-sm font-light text-gray-400 px-5 md:px-12 z-10"
          text="Wagestack is a programable salary wallet designed for employees and integrates well with your favorite payroll platforms"
        />
        <LandingPageForm />
      </div>
      <FooterForm />

      {/* Background Images */}
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
      <div className="absolute w-full top-0 left-0 right-0 z-10 flex justify-center">
        <Image
        className="h-[0.15rem]"
          src="/HorizontalDivider.png"
          alt="Horizontal Line"
          width={800}
          height={800}
          priority={true}
        />
      </div>
    </main>
  );
}
