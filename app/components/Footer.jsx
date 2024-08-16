import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="relative border-b-[15px] mt-10 border-[#0060AF] h-screen">
      <div className="relative h-full">
        {/* Footer Content */}
        <div className="relative py-[85px] z-10 max-w-[1206px] border border-black">
          Footer
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://s3-alpha-sig.figma.com/img/14db/7a3c/2ece97acc56da5020794010bf24e9321?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjOyzwgQWUQDgy8pX6v84dT1FPp8TWVm7s243adVt65U4xBW6nSsm5hNFzjfPLpoz2qGqGwTojYEf19sKs0nqh3rpi3Sx2sVMRNDYeAgPR5LYa2LhLoFOClffMbz1qSz02F9y3br~K4E-yceiKXYX4KM9UC62ds46r6aJ8vGFV6k5qlHqSVbctJrgfUDPKWwOibxCHg~8MvXrJdD-zOPosPqsIbq4AO4qrqInXMU~UmfbZEZO7w8STPEoaR2SIn8~0ldsrGWDvb3kRvHUaHse1ZASlLdFgjocKxTTajHGw7Rr~EMB1traciU2YVPr2HCiwwFLCCjIgjNj9JM~h13Ag__"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-35 z-0"></div>
      </div>
    </div>
  );
}
