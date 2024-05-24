import { FooterForm } from "@/components/FooterForm";
import { LandingPageForm } from "@/components/LandingPageForm";
import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center relative">
       {/* <div className="absolute inset-0 z-0">
    <img
      className="object-cover"
      src="/All.png"
            alt="Background"
    />
  </div> */}
      <div className="mb-5 rounded-full px-3 py-1 text-sm border border-gray-500 text-gray-300">
        Waitlist • Coming Soon
      </div>
      <div className="flex flex-col gap-y-5 px-5 w-full md:w-[30rem] lg:min-w-[40rem] lg:max-w-[40rem] mb-56 md:mb-20">
        <Typography
          className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center scroll-m-20 text-4xl tracking-tight lg:text-6xl font-semibold"
          text="Your paycheck but with super powers"
        />
        <Typography
          className="text-center scroll-m-20 text-sm font-light text-gray-400 px-5 md:px-12"
          text="Wagestack is a programable salary wallet designed for employees and integrates well with your favorite payroll platforms"
        />
        <LandingPageForm />
      </div>
      <FooterForm />
    </main>
  );
}
