import Image from "next/image";
import React from "react";

export default function JoinUs({ joinUsData }) {
  console.log("joinUsData", joinUsData);

  return (
    <div className="relative w-full h-[428px] border-l-[15px] border-[#00AE44]">
      {/* Container for the background image */}
      <div className="absolute inset-0">
        <Image
          src={joinUsData?.homeJoinBackgroundImage?.node?.sourceUrl}
          alt="Background Image"
          layout="fill" // Makes the image fill the parent div
          objectFit="cover" // Ensures the image covers the div without distortion
          className="z-0"
        />
      </div>

      <div className="relative flex items-center justify-center w-full h-full z-10 p-4 text-white">
        <div className="absolute top-0 left-0 right-0 mx-auto mt-[84px] w-full text-center">
          <h2 className="text-[18px] text-[#ffff] leading-5 font-poppins font-medium">
            {joinUsData?.homeJoinSubtitle}
          </h2>
          <h1 className="my-[23px] font-bold text-3xl mt-[23px] font-poppins text-[#ffff]">
            {joinUsData?.homeJoinTitle}
          </h1>
          <div
            className="leading-6 max-w-[483px] mx-auto font-lato font-normal text-[16px] text-[#FFFFFF]"
            dangerouslySetInnerHTML={{
              __html: joinUsData?.homeJoinDescription,
            }}
          ></div>
          <button className="mt-[20px] border-[1px] border-[#fff] font-poppins font-semibold text-xs text-[#000000] px-[22px] py-[14px] rounded-[20px] bg-white">
            <a href="#" title="Read More" target="">
              {joinUsData?.homeJoinButton?.title}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
