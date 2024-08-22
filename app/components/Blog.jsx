import Image from "next/image";
import React from "react";

export default function Blog({ blogData }) {
  console.log(blogData);

  const blogsList = [
    {
      id: 1,
      img: "https://s3-alpha-sig.figma.com/img/120d/3f86/d683cd11103515dea4183aa54d5db49f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lyYyXKy~EzUn80Sy3gh9A-l2jTM935176b5fry92WpHwut3O~sgBM5TdH~Q5nc0tKWzv8YKDwIGm7ROblpgqWDhe35ia2U8J9a-mqqRemHqcTeCZ8DNGRy3mrw28qcCtdvi3dwaMUw-ZPRd2-qOatLyKka6JS1wV6OznvaKrg~~YbhLPWTkAhql2Yb2uOxdUaRsuPb53JOFi8JEt-qK6jPrc2mIbGx49WTfRcn66yHTc68VuNvxib385PkJfMwfxTL3~7if-UOq38~oFrLFSb~JV1OUw~Y-Oh1CWjp0ulMLDY6VBllSeulSbwGz2AwMPLcEMfaGBYY0Bp6pGyVXSvw__",
      date: "10 Jan 2024",
      desc: "How to choose the perfect wallcolour for your office",
      buttonText: "Read More",
    },
    {
      id: 2,
      img: "https://s3-alpha-sig.figma.com/img/f78f/9742/001c54cf3741e090cf195b6eb6365099?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayghiedWRoHBuj8V7EwXFxEtVXT5vPGQEBefLPVDyPZc0bAs7b26nLa349U424Vx9o-6-87U9lEyMik5B4q4T2LZu9YbPuwgtLYn7bD~JZ487B0mNQIb6eSfHyQDVET8LfylkGk904cK~CAQBq9BesHeMeazCBjKJvqsWM-kBf4j~wSRTV7f1zETYW4E3vQo~7eDi7kZAuoeCxyBiXknGGpDeAH6PvXX8l8-JxhjNjmHTfE-PmjgOw~EM1LWUuZysn6qDjMV3bEJ3s7id75hgXO3fbG5QxML4y4RyRr4OgfVzsg8CLU4OqORN8Go3j512YtcW~4NbrPXdT8Yj2SLeQ__",
      date: "10 Jan 2024",
      desc: "How to choose the perfect wallcolour for your office",
      buttonText: "Read More",
    },
    {
      id: 3,

      img: "https://s3-alpha-sig.figma.com/img/8182/c190/7d74bdc181a1fdc28b55ebf2b3d85aec?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzSgg3PRdJrNIkNIxscxm~4snUeRvSD5lJMANlyj6FrD6MlwPKbGIyOgLSIPTmCCOSuHBHeQB6D4FDIM-IrKxYSDRI6vABf7Jn2LJvX2PjTpudDJSAtB5csNes2NnwQAmeMPFpMuf4hkJrZy-k6bhV1lVmuZaDpjrZIkLBJSTv0rinkketJFrHNFu1IBxXb6cdkaNeLCQoWHd7PNl~CogUj70Q~c1kEolrFT68OQTRs7S71T~WhAO22KC1ZmgaHYs3bRBQEB2cJ7pOPlBTUa7KbMWDS0p990nQnFcQaEe~Yhg5D8MZK47T3hJXjSAgHwIFZP1ZPxWeqK1FwGYJydvA__",
      date: "10 Jan 2024",
      desc: "10 stylish cream colour combination for your home",
      buttonText: "Read More",
    },
    {
      id: 4,
      img: "https://s3-alpha-sig.figma.com/img/d237/c14f/b072b57fe76c8b3d702d26f240b423b8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BaiV7ETcaoLda0qgCDqYDYOyKsZx8qxmxPkwGDa27gIQjfMDOO4Qh7fg5zEt76uc4C396Zc8HqlO46wnFRiua0givzF-Qyay2RvFmsRakACFdsFydn2cyHZMUYutSxzEBViUy7LAmfC4ru456wNc66-ozrpspszsGbMBhlmU0Kp-Hdgrco36Xxse~ROO8GZZjZ~2pRPdAj4oQAhuAB0EprjeKmJIZcGWa~IT4ce93MhdtsaL00AFIMGDRNIzD2eP9csJGekJfsd8ehghJsdjNB6HMIzd5LstwQQ722SV86jiW8XujZWDgEU1vx3VcAS2d9OzpQWBe4OQUuhdzJ8Yog__",
      date: "10 Jan 2024",
      desc: "How to choose the perfect wallcolour for your office",
      buttonText: "Read More",
    },
    {
      id: 5,
      img: "https://s3-alpha-sig.figma.com/img/d71b/0bd7/3a3827657e3ba84499ee07c2783af5a0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=or7zFVEnWe0ppBu8kCKRy19Sh-V607m8vJvz8~hM6va-Y1m34H9FFqa6SHJ-pUa8VBpcbI6F1okm2SjPAUUcayl3O2Sbiur4Z87QKSSgVsi1TCiWG-SK2TChM2paaMzVQuUzQUu40LbQlU5Zoj6~k7gh451ujnCe-IAG2CkjHFrfSrIM12KnN4tLFVPB0W0XoSs8-2nOL1n1YzU~uk78157PXz6fHqRR7aFFU0d8QSMfmOeBeTyHCaTJ-EAxnLcRhu8fwIdqMqXbsMoihnsHAAhSglBEynWKocWELISlyflj~x9OiQN4rYevX7bKiRaThd7HGCMvrJoiEFUwTNoMng__",
      date: "10 Jan 2024",
      desc: "How to choose the perfect wallcolour for your office",
      buttonText: "Read More",
    },
  ];

  function formatDate(dateString) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", options)
      .replace(/(\d{2}) (\w{3}) (\d{4})/, "$1 $2 $3");
  }

  const { blogSubtitle, blogTitle } = blogData?.pages?.nodes[0].homepage;

  return (
    <div className="border-l-[15px] border-[#00C1DE] h-screen">
      <div className="mx-[81px]">
        {/* Wrapper for Subtitle and Title */}
        <div className="pt-[85px]">
          {/* Category Titles */}
          <h2 className="text-[18px] text-[#000000] leading-5 font-poppins font-medium">
            {blogSubtitle}
          </h2>
          <h1 className="my-[23px] font-bold text-3xl mt-[23px] font-poppins text-[#000000]">
            {blogTitle}
          </h1>
        </div>
        {/* Grid Layout for Blog Items */}
        <div className="grid grid-cols-3 gap-x-6">
          <div className="flex flex-col gap-y-6">
            {blogsList.slice(0, 2).map((blogObj) => (
              <div key={blogObj.id} className="relative">
                <Image
                  src={blogObj.img}
                  alt={"image" + blogObj.id}
                  width={350}
                  height={209}
                  className="object-cover"
                />
                <div className="absolute bottom-3 h-[118px]  text-white pl-[29px] max-w-[269px] z-10">
                  <h2 className="mt-[20px] font-lato font-medium italic text-[#ffff] text-[14px]">
                    {blogObj.date}
                  </h2>
                  <p className="font-poppins font-semibold pt-[10px] text-[20px] text-[#ffff] leading-5">
                    {blogObj.desc}
                  </p>
                </div>
                <div className="absolute w-[352px] inset-0 bg-black opacity-35"></div>
              </div>
            ))}
          </div>
          <div className="relative w-[509px] right-[80px]">
            <Image
              src={blogsList[2].img}
              alt={"image" + blogsList[2].id}
              layout="fill"
              objectFit="cover"
              className="z-0 "
            />{" "}
            <div className="absolute bottom-2 h-[118px]  text-white pl-[29px] max-w-[269px] z-10">
              <h2 className="mt-[20px] font-lato font-medium italic text-[#ffff] text-[14px]">
                {blogsList[2].date}
              </h2>
              <p className="font-poppins font-semibold pt-[10px] text-[20px] text-[#ffff] leading-5">
                {blogsList[2].desc}
              </p>
              {/* <button className="bg-[#FFFFFF] text-[#000000] rounded-[20px] text-xs py-[5px] px-[10px] mt-[4px]">
              {blogObj.buttonText}
            </button> */}
            </div>
            {/* <div className="absolute inset-0 bg-black opacity-35"></div> */}
          </div>

          <div className="flex flex-col gap-y-6">
            {blogsList.slice(3).map((blogObj) => (
              <div key={blogObj.id} className="relative">
                {console.log(blogObj.desc)}
                <Image
                  src={blogObj.img}
                  alt={"image" + blogObj.id}
                  width={350}
                  height={209}
                  className="object-cover"
                />
                <div className="absolute bottom-2 h-[118px]  text-white pl-[29px] max-w-[269px] z-10">
                  <h2 className="mt-[20px] font-lato font-medium italic text-[#ffffff] text-[14px]">
                    {blogObj.date}
                  </h2>
                  <p className="font-poppins font-semibold pt-[10px] text-[20px] text-[#ffff] leading-5">
                    {blogObj.desc}
                  </p>
                  {/* <button className="bg-[#FFFFFF] text-[#000000] rounded-[20px] text-xs py-[5px] px-[10px] mt-[4px]">
                    {blogObj.buttonText}
                  </button> */}
                </div>
                <div className="absolute w-[352px] inset-0 bg-black opacity-35"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
