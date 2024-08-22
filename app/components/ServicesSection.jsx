import Image from "next/image";
import React from "react";

export default function ServicesSection({ service }) {
  const imagesList = [
    {
      id: 1,
      img: "https://s3-alpha-sig.figma.com/img/2668/d387/9222bb16efbce6be4c1455b4e44dcb4a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otxqHLKA22ZbhsABkwB5AMjKeYnlcMm6I1EH5rTFaLaG8fF6rTRxXmh97dXph3VcemRRJJAngSUSvrupMdHerGVEc56C~c1X6~nV4Lm4ma0kwirDDy5MqCZnP0aosVLTbHcQv7Xfwu85YHqeIehoHrHU3Yr1gqZsU9vTh6fpLs5DpZtJTfxxoAfuABJ~Xa8gtkqeMdNdYIOF~bH60lo61IMcPZaoOA0sIOGSYqB9fkNj3PHpNcfujr5OakFRJv2aJMh8aglrzZJSA8zHEfqpcGH1aYIPkbLH4ist79zGhKDFN~GzldmgxG1ZO~p-q05Tm44VNrJT2gp6Uu-F9GWdzw__",
      heading: "Wall Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
    },
    {
      id: 2,
      img: "https://s3-alpha-sig.figma.com/img/1e6b/3267/7f2f2d75bea5bd4e55291067c7d6ab56?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bswg5vSHLIhki6fq7gS9COGw-gIAXha0Qn-rqkrJ66FrwYKPFDGsjpFqn5rYORS4I5VY2R4THevp0ADiUfYpmNc7XBuJT-J7jiiJtxCmEubkJyZFXrw7V0GVTeJaK5HVyi3jwLd9BtL9y-BzzWG~Iv3Eg4Bq5Apj7L~YGguqrD7f4QsWnVIUohR4TwzgUcp-hruNawbCyeQFqbkP-Q0kWHosRuIaBCmLRG31EiIqZIQJEMNufK5nQz7bo-7Q8CxaCalzT0ZC25P1yeP2mZRNYMFPPbDINdvblz7kc1AGx5NyP7CCZwsT2wL7naZJbwzshzO-hdOVCk~KbAxkYmK21w__",
      heading: "Water Solution",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
    },
    {
      id: 3,
      img: "https://s3-alpha-sig.figma.com/img/6433/98db/ae2ce006c80b5c93be4534f65374c20c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0dRaIY2RzIS5-tzAn7Xu2MdFv9PJCSPgg8-US8-bbrOnkRTtCT4wZkAnJcQy2H2FavlPewz69gRxwUNxPqqYrV1cmwyyz4YFKu3ocYJaaJNsTrsVzXr~YCroLjZmHapcJTxzXz3e4FZSMAdVRvYpzgmrBQFudK3wLcVtdQsFuj2vIx~SdvRZsm1FDlv~8KhaI82MzJVQbunFPjuu7DbpRhaxsTcL2bd4ovCQ64xxx6YseAccEiSWUeprmEf3pbX2vIleZZ33eKjIKbvFE5SxyMf6Z6-GmSCjXohJT3uUtyP7noSeeyepUG9Y67bfcKaiUesAH6oDF1hOr0~rIMThw__",
      heading: " Painting",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Read More",
    },
  ];
  return (
    <div className="border-l-[15px] border-[#F5E847] h-full">
      <div className="mx-[81px]">
        {/* Wrapper for Subtitle and Title */}
        <div className="pt-[85px]">
          {/* Category Titles */}
          <h2 className="text-[18px] text-[#000000] leading-5 font-poppins font-medium">
            {service?.homeServicesSubtitle}
          </h2>
          <div className="flex items-center gap-[14px]">
            <h1 className="my-[23px] font-bold text-3xl font-poppins">
              {service?.homeServicesTitle}
            </h1>
            <Image
              src="/yellow-crayon.png"
              alt="crayons"
              width={178}
              height={10}
            />
          </div>
        </div>
        <div className="flex gap-6 justify-between">
          {imagesList.map((imageObj, i) => (
            <div key={imageObj.id} className="relative">
              <Image
                src={imageObj.img}
                alt={"image" + i}
                width={450}
                height={380}
                className="object-cover"
                key={imageObj + i}
              />
              <div
                className="absolute bottom-0 h-[118px] bg-yellow-200 text-white w-full  pl-[29px]"
                style={{ backgroundColor: "rgba(255, 231, 16, 0.75)" }}
              >
                <h2 className="mt-[20px] font-poppins font-semibold text-[#000000] text-xl">
                  {imageObj.heading}
                </h2>
                <p className="font-lato font-normal pt-[10px] text-[14px] text-[#000000]">
                  {imageObj.desc}
                </p>
                <button className="bg-[#FFFFFF] text-[#000000] rounded-[20px] text-xs py-[5px] px-[10px] mt-[4px]">
                  {imageObj.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
