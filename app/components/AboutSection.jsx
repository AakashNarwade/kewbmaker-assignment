import Image from "next/image";
import React, { useState } from "react";

export default function AboutSection({ aboutSection }) {
  // Function to add margin to paragraphs
  const addMarginToParagraphs = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    const paragraphs = tempDiv.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.style.marginBottom = "13px";
      p.style.color = "#656565";
    });

    return tempDiv.innerHTML;
  };

  return (
    <div
      className="flex gap-[73px] justify-between border-l-15 border-[#E70000]  h-full
    "
    >
      <div className="mx-[81px] mt-[142px] max-w-[706px]">
        <h2 className="font-bold text-[18px] text-black font-poppins">
          {aboutSection.homeAboutSubtitle}
        </h2>
        <div className="flex items-center gap-[14px]">
          <h1 className="my-[23px] font-bold text-3xl font-poppins">
            {aboutSection?.homeAboutTitle}
          </h1>
          <Image src="/red-crayon.png" alt="crayons" width={178} height={10} />
        </div>
        {/* <Image src={"/crayons.png"} alt="crayons" width={178} height={10} /> */}
        <div
          className="font-lato leading-6 "
          dangerouslySetInnerHTML={{
            __html: addMarginToParagraphs(
              aboutSection?.homeAboutDescription || ""
            ),
          }}
        />

        <button className="border-[1px] border-[#E70000] font-poppins font-semibold text-xs text-[#E70000] px-[22px] py-[14px] rounded-[20px]">
          <a href="#" title="Read More" target="">
            {aboutSection?.homeAboutButton?.title}
          </a>
        </button>
      </div>
      <div className=" h-[535px] w-[583px] mr-0">
        <Image
          src={
            aboutSection?.homeAboutVideoImage?.node?.sourceUrl ||
            "/default-image.jpg"
          }
          alt={"About Image"}
          width={500}
          height={777}
        />
      </div>
    </div>
  );
}
