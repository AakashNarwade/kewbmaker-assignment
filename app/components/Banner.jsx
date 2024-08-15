import Image from "next/image";

export default function Banner({ banners = [] }) {
  console.log(banners);

  if (!banners.length) {
    return <div>No banners available</div>;
  }

  return (
    <div className="">
      <div className="h-screen w-full relative">
        <Image
          src={banners[0]?.bannerImage.node.sourceUrl || "/default-image.jpg"} // Fallback image
          alt={banners[0]?.bannersTitle || "Banner Image"} // Fallback alt text
          width={500}
          height={777}
          className="h-screen w-full"
        />
        <div className="absolute top-6 ml-[80px] mt-[166px]">
          <h2 className="font-bold text-[40px] text-white w-[265px]">
            {banners[0]?.bannersTitle || "Default Title"}
          </h2>
          <p className="font-normal font-lato text-white ">
            {banners[0]?.bannerDescription || "Default Description"}
          </p>
          <button
            className="px-[22px] py-[14px] bg-white text-[#5E4D7A
] rounded-[20px] mt-[23px] text-xs"
          >
            {banners[0]?.bannerButton.title}
          </button>
        </div>
      </div>
    </div>
  );
}
