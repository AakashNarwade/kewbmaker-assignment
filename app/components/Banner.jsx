import Image from "next/image";

export default function Banner({ banners = [] }) {
  if (!banners.length) {
    return <div>No banners available</div>;
  }

  return (
    <div className="">
      <div className="relative">
        <div className="h-screen w-full ">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/7999/7300/254cd3c5d9ae21720ec9cc3c186add72?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSXdGDr~eSJjrVzSkPGV04Z-u~7ZXEXK7wS5t9OvRPWVHAgW888B5lXLmp7jk3f1Hr3Sf6MiLWkJ45zdNISrQocT5WqZJVTHf5cYRuBN~apBHc-RgBwWPT0wvYwWC-Alm8e9RUisRZF4mJ7OdFXplm0ewb4Pr6QgozUSXKc5uZW0e6PYiPmDv2RwJP1LfQ5gK17ZtNB0TG7KB8XQQglNzBxLLd0K6E5bTLfJ1EwVZvP0uZxIT4dVmENKCa1bHwIdV5ctbJnOhGuxgpDLJZtgiL0q36Wot29ibElskIlJG-Y1MQnrb2ZafZFgwRzbM-iWnHsAMEV173Fr9xhAh3H4HQ__"
            }
            alt={banners[0]?.bannersTitle || "Banner Image"} // Fallback alt text
            width={500} // Adjust as needed
            height={777} // Adjust as needed
            className="object-cover w-full h-full" // Full coverage and aspect ratio
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
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
