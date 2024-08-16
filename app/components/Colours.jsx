import React from "react";

export default function Colours({ colours }) {
  console.log(colours);

  const coloursList = [
    {
      id: 1,
      heading: "Wall Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
      bgColour: "#FAE0B2",
    },
    {
      id: 2,

      heading: "Water Solution",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
      bgColour: "#FBC9C3",
    },
    {
      id: 3,

      heading: " Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
      bgColour: "#00C1DE",
    },
    {
      id: 4,

      heading: " Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
      bgColour: "#0060AF",
    },
    {
      id: 5,

      heading: " Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
      bgColour: "#800404",
    },
    {
      id: 6,

      heading: " Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
      bgColour: "#ECA628",
    },
  ];
  return (
    <div className="border-l-[15px] pb-[84px] border-[#00AE44] h-full">
      <div className="mx-[81px]">
        <div className="pt-[85px]">
          <h2 className="text-[18px] text-[#000000] leading-5 font-poppins font-medium">
            {colours?.homeColoursSubtitle}
          </h2>
          <div className="flex justify-between items-center">
            <h1 className="my-[23px] font-bold text-3xl mt-[23px] font-poppins text-[#000000]">
              {colours?.homeColoursTitle}
            </h1>
            <button className="border-[1px] border-[#00AE44] font-poppins font-semibold text-xs text-[#00AE44] px-[22px] py-[14px] rounded-[20px]">
              <a href="#" title="Explore More" target="">
                {colours?.homeColoursButton?.title}
              </a>
            </button>
          </div>
        </div>
        <>
          <div className="flex flex-grow mt-[20px]">
            {coloursList.map((colourObj) => (
              <div
                key={colourObj.id}
                className="flex-none"
                style={{
                  width: `calc((100% - ${16 * (6 - 1)}px) / 6)`,
                  height: "158px",
                  backgroundColor: colourObj.bgColour,
                  marginRight: "16px",
                  boxSizing: "border-box",
                }}
              ></div>
            ))}
          </div>
          <div className="">
            <h3 className="font-poppins font-normal text-[15px]  text-center">
              hello
            </h3>
            <h4 className="font-poppins font-normal text-[14px] text-gray-700">
              hello
            </h4>
          </div>
        </>
      </div>
    </div>
  );
}
