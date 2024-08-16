import Image from "next/image";
import React from "react";

export default function ServicesSection({ service }) {
  console.log("service", service);

  const imagesList = [
    "https://s3-alpha-sig.figma.com/img/2668/d387/9222bb16efbce6be4c1455b4e44dcb4a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otxqHLKA22ZbhsABkwB5AMjKeYnlcMm6I1EH5rTFaLaG8fF6rTRxXmh97dXph3VcemRRJJAngSUSvrupMdHerGVEc56C~c1X6~nV4Lm4ma0kwirDDy5MqCZnP0aosVLTbHcQv7Xfwu85YHqeIehoHrHU3Yr1gqZsU9vTh6fpLs5DpZtJTfxxoAfuABJ~Xa8gtkqeMdNdYIOF~bH60lo61IMcPZaoOA0sIOGSYqB9fkNj3PHpNcfujr5OakFRJv2aJMh8aglrzZJSA8zHEfqpcGH1aYIPkbLH4ist79zGhKDFN~GzldmgxG1ZO~p-q05Tm44VNrJT2gp6Uu-F9GWdzw__",
    "https://s3-alpha-sig.figma.com/img/1e6b/3267/7f2f2d75bea5bd4e55291067c7d6ab56?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bswg5vSHLIhki6fq7gS9COGw-gIAXha0Qn-rqkrJ66FrwYKPFDGsjpFqn5rYORS4I5VY2R4THevp0ADiUfYpmNc7XBuJT-J7jiiJtxCmEubkJyZFXrw7V0GVTeJaK5HVyi3jwLd9BtL9y-BzzWG~Iv3Eg4Bq5Apj7L~YGguqrD7f4QsWnVIUohR4TwzgUcp-hruNawbCyeQFqbkP-Q0kWHosRuIaBCmLRG31EiIqZIQJEMNufK5nQz7bo-7Q8CxaCalzT0ZC25P1yeP2mZRNYMFPPbDINdvblz7kc1AGx5NyP7CCZwsT2wL7naZJbwzshzO-hdOVCk~KbAxkYmK21w__",
    "https://s3-alpha-sig.figma.com/img/6433/98db/ae2ce006c80b5c93be4534f65374c20c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0dRaIY2RzIS5-tzAn7Xu2MdFv9PJCSPgg8-US8-bbrOnkRTtCT4wZkAnJcQy2H2FavlPewz69gRxwUNxPqqYrV1cmwyyz4YFKu3ocYJaaJNsTrsVzXr~YCroLjZmHapcJTxzXz3e4FZSMAdVRvYpzgmrBQFudK3wLcVtdQsFuj2vIx~SdvRZsm1FDlv~8KhaI82MzJVQbunFPjuu7DbpRhaxsTcL2bd4ovCQ64xxx6YseAccEiSWUeprmEf3pbX2vIleZZ33eKjIKbvFE5SxyMf6Z6-GmSCjXohJT3uUtyP7noSeeyepUG9Y67bfcKaiUesAH6oDF1hOr0~rIMThw__",
  ];
  return (
    <div className="border-l-[15px] border-[#F5E847] h-full">
      <div className="mx-[81px]">
        {/* Wrapper for Subtitle and Title */}
        <div className="pt-[85px]">
          {/* Category Titles */}
          <h2 className="text-[18px] text-[#000000] leading-5 font-poppins">
            {service?.homeServicesSubtitle}
          </h2>
          <h1 className="my-[23px] font-bold text-3xl mt-[23px] font-poppins text-[#000000]">
            {service?.homeServicesTitle}
          </h1>
        </div>
        <div className="flex justify-between">
          {imagesList.map((imageSrc, i) => (
            <Image
              src={imageSrc}
              alt={"image" + i}
              width={400}
              height={426}
              key={imageSrc + i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
