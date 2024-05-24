import { DatePicker } from "@/components/DatePicker";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const NextPage = () => {
  return (
    <main className="md:px-0 py-10 md:py-20 flex flex-col gap-10 items-center justify-center relative z-10">
      <Image
        className="object-cover md:object-fill w-full h-full z-10 md:z-0"
        src="/Linear.png"
        alt="Background"
        layout="fill"
        priority={true}
      />
      <div className="z-10">
        <DatePicker />
      </div>
      <div className="px-5 flex flex-col gap-3 relative">
        <div className="absolute top-[-6.5rem] left-0 right-0 bottom-0 z-0 overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-black to-black opacity-70" />
          <Image
            className="object-cover w-full h-full lg:rounded-full"
            src="/All.png"
            alt="Background stars"
            width={900}
            height={900}
            objectFit="cover"
            objectPosition="center bottom"
            priority={true}
          />
        </div>

        <Typography
          className="text-center text-pretty scroll-m-20 text-4xl tracking-tight lg:text-5xl text-gray-300 z-10"
          text={"What's next after 8,000 users"}
        />
        <Typography
          className="text-center scroll-m-20 text-lg font-light text-gray-400 z-10"
          text={"How we got here and where we're going next."}
        />
        <div className="flex justify-center cursor-pointer z-10">
          <div className="flex items-center gap-2 w-36 border border-gray-500 rounded-full">
            <svg
              className="rounded-full"
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="28"
                height="28"
                transform="translate(0.5)"
                fill="url(#pattern0_101_1002)"
              />
              <defs>
                <pattern
                  id="pattern0_101_1002"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_101_1002"
                    transform="scale(0.03125)"
                  />
                </pattern>
                <image
                  id="image0_101_1002"
                  width="32"
                  height="32"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>{" "}
            <span className="text-md font-light text-gray-400">
              Nuel Adeleke
            </span>
          </div>
        </div>
      </div>
      <div className="px-5 max-w-[39rem] z-10">
        <Typography
          className="text-left scroll-m-20 text-md font-light text-gray-400"
          text={
            "Since launching publicly ten months ago, we crossed 100,000 verified users on Resend. Our open source project is already at 12,181 stars on GitHub and 209,339 weekly downloads on npm"
          }
        />
        <br />
        <Typography
          className="text-left scroll-m-20 text-md font-light text-gray-400"
          text={
            "Resend is powering millions of emails sent every month with a small team of six people, and this is only the beginning."
          }
        />{" "}
        <br />
        <Typography
          className="text-left scroll-m-20 text-md font-light text-gray-400"
          text={"Here's a quick recap of our journey so far and what's next."}
        />
        <br />
        <div>
          <h1 className="font-semibold text-2xl text-gray-200">
            How we got here
          </h1>
          <br />
          <Typography
            className="text-left scroll-m-20 text-md font-light text-gray-400"
            text={"Every idea has a story, and ours started in August 2022."}
          />{" "}
          <br />
        </div>
        <div>
          <h1 className="font-semibold text-lg text-gray-200">
            Aug 2022: Reimagining email
          </h1>{" "}
          <br />
          <Typography
            className="text-left scroll-m-20 text-md font-light text-gray-400"
            text={
              "Bu and I were using multiple tools for email at both our full-time jobs and side projects, but they all felt outdated, slow, and built for marketers, not developers."
            }
          />{" "}
          <br />
          <Typography
            className="text-left scroll-m-20 text-md font-light text-gray-400"
            text={
              "We also had to deal with emails landing in the spam folder and felt the pain of building a beautiful email template that would work the same in every email client."
            }
          />
          <br />
          <Typography
            className="text-left scroll-m-20 text-md font-light text-gray-400"
            text={
              "So, we started playing with the idea of building the “Stripe of Email."
            }
          />
        </div>
      </div>
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
      <div className="flex justify-center absolute w-full left-1/2 right-1/2 transform -translate-x-1/2 top-0 z-10">
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
};

export default NextPage;
