import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const comapnyImages = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/4179/7ef3/d166a828eb272e1d877c33dea427ce4c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGWx7pqO6Yzmj07hYe-XwqFt~E5eFqxKHTWpZgJJ9Wvx5AKTaFB9B0g-QZGf8Cko2V5H7ccYeo~8AKryOUNr154Xy3NIvftKmMzIaaj9Aa9d7cVu78AYlkRDocseSzchFpsxpnsp8kBRT9GuKUlNQac~74doz3LU3AkYhpvX0YLgeg6IChlQT1sZS-n2-Y4y0NjNCGjXEU2gIzgfMlpio6kiOHewban-BnTuPTU36E7qOxq3tPe~JL~i-IzDqMDqD8f3N4vaHBs5GqhXUbFuyyXTqKU3k8I5xAB7dct7gtpcxZdj-tqJwXKsRdLp9l4MLc4UFtmJcuV0eI97YFQWwA__",
      name: "Astral Pipes",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/461d/68f7/b78f74680782960dd2fe3a437aeec9b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgPOCj6jV5lp3XMC5zAZeU0Wfu28fLHr7fB3Rkpg4aRhsGcsELa6xuG2eRm1L4bl-jIa2j4KTylXnBrNVDd5WHRsjgqGF6dzb-edjr7HY1BT3FF7MZXTO7e48arz8LVpBrHNXd48YGJrtGJ9KlaWqhnA2pg5HG1jQUxTgUuo5DahVBedruzNqqbgRAuGBUHPp8iQeDSYunFAtVNamJhGjeo6~R6drD4z3DUIZV6Bh4IxlHT~rtuQDJJMhA8wQujlbykeyXpdDjqG0wMBbVdn2Km4f-0ECDal3K4qjFnzkrjirwbx8O-5z-RLnbLU9CQ3V-fo6-8Q7OI4dOGfO1OVgA__",
      name: "Astral Adhesives",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/1d6e/aeff/2c55e44bb82c6297b73f1c8b99905906?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbH-sJnT2GLG3JkQy5PBa5T2mEJATIYH7jYQ6NB73WWo~x65OYpa9Eey~J~9CZTFq6sVHjNyIbsQjP0JBkdqZJzco4Wueo7Y1hDZJBYRlZt9sPGSCBS9ja2qUSxvP0ZIEtvzMFvsA5m9kQtbvwQv3UfjSlLm~7lGTrCIFhLYZXvMMNbfR1zHmx5G5dWrmBZ4q8tPYgtLW4wFbVu8rZoH~Vd3r2V9I7ZOQPClV-RdcPDTRnFXACQq6C97TXdSMQQQhagGXBxcMykYvNaSrQ00WMVbpHbr6apNeiea3u8ar6414VqOCgvs1vIdBrFLnhVUxETs-LiUxp1wVhosuT5ufg__",
      name: "Bond It",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/7c6c/656b/6a7ca6a1f17858c9e2045a10247512b0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uz~KSDFDa57V~buWR11rCtSMONlP3O46EZ1EaBAIBXrd~VW2B8R9bz2nlwxWagLn~qZjw7HBQxGvIqOT~Xpsd8i9TtsMP7CKOgi75hfeivrEOYS8B05NxB1oNurFqEIW1QKvBGk-tWN9bIHSwimQaitP4Bpmx3iE9CAqR0pA8vLsjjCnrEmEJ7hfb55sVf5w28ZjZNBjSB2N-XkiCP5RHtkJJwAA-GOqKyBA2HAcWmhkv6qf9~C48krUFxndscIy~tlI3jAxMMmVdmE1JgDoDdCOVRDDP9dVWKP4IaRGGoTVkAO35AXsrfZ0s--gEfTwNTZ1kYcQ3FuiWX3Utyd4GQ__",
      name: "Astral Bathware",
    },
    {
      id: 5,
      src: "https://s3-alpha-sig.figma.com/img/bf79/cb59/074e6b0386d120df5bbbf741945c95fe?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RvdCOAFIBBXG-YQ4g14WlYWGZcHVBO9Cr1KlFYm853L1CDsc4v~t4nbl-u8CWPxKxYmjcRlhsSgDO40iAONzW-MkV~GUsaz8ymE5heJJmReZ8IV4GJVWCQRn36eW7i7qHFyf68E3zA1J0mB0sFL8f19rdXFLTiXmCRxl1mFAPUXQJZUo~6CEB1lR7SUydb1gaPe2iIvcVdGoFswP3TOuTMt6auAlMkc1lQ4zKxOLwo3d7RmUjBkoQRfJDyQPOVdD71In7x~T9z0t2PdZKdLCRdD6IAtsLiW7CE8nqwaYsQJBSpgAStZpsp0xLBvT1aTojX7ahI-aV4Z9eS4xtAPdzg__",
      name: "Gem Faints",
    },
  ];
  return (
    <div className="relative border-b-[15px] border-[#0060AF] h-screen">
      <div className="relative h-full">
        {/* Footer Content */}
        <div
          className="relative  z-10 max-w-[1206px] mx-auto"
          style={{ top: "59px" }}
        >
          <div className="">
            <h1 className="text-center font-poppins font-bold text-[30px] text-[#ffff]">
              Group Company
            </h1>
            <div className="py-[68px] flex justify-center">
              {comapnyImages.map((cImg) => (
                <Image
                  key={cImg.id}
                  src={cImg.src}
                  alt={cImg.name}
                  width={161}
                  height={64}
                />
              ))}
            </div>
          </div>
          <hr className=" bg-[#EEDBB0] text-[0.8px]" />
          <div className="mt-[56px]">
            <div className="flex justify-between ">
              <Image
                src="https://s3-alpha-sig.figma.com/img/bcc3/aa86/26a6304b340f2452f8c91a497fb054b1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nnvvUOqjzFp7XnQvbz8ZEk~JqT3ESY1IlPLbqx76WIY006zYVpInSmMH-wztX1wWM6I7WZ7Hr4nkOwY~W2rS5SKqf7OwyDM4aWiY~9yGTMXp3Tx5PZMY~0GZ74zkXEh53n2jlTP~o8j0KFym6k96qAwAmoD9pcF4wKFiZXE21XTd4O-ZXoWflJr7Q-PADPR3geT7I7iTu~KO0dYSEray3L2Kav0y8Y~0wqKxcm28A1eGsxK7lVMShrMB5gOPveHfXQdGm4ytCrE4ANkxktKg1ZxoVtsdGhFVU9kZlyEAEsLWEhV8KZSN1P2JQ-JiwAn3wwLG9aRXWjyH5O-7woH77Q__"
                alt="Astral Paints"
                width={200}
                height={63}
              />
              <div className="flex justify-between items-center gap-[56px]">
                <div className="">
                  <h3 className="text-[#EEDBB1] font-poppins font-bold text-[14px]">
                    Sign Up To Our Newsletter
                  </h3>
                  <p className="font-lato font-normal text-xs text-[#FFFFFF] my-[2px] leading-5">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    className="py-[18px] px-[20px] rounded-[30px] bg-transparent border-[2px] relative w-[361px]  focus:outline-none border-[#EEDBB1]"
                    placeholder="Enter Your Email Address"
                    name=""
                    id=""
                  />
                  <button className="rounded-[30px]  py-[18px] px-[10px] border-[2px] border-[#0060AF] bg-[#0060AF] text-[#EEDBB1] absolute right-[-20px] focus:outline-none">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Doplicated */}
          <div className="mt-[56px]">
            <div className="flex justify-between ">
              <div className="flex justify-between items-center gap-[56px]">
                <div className="">
                  <h3 className="text-[#EEDBB1] font-poppins font-bold text-[14px]">
                    Reach Us
                  </h3>
                  <div className="flex pt-[24px] gap-3 items-center text-white">
                    <CiLocationOn size={25} />
                    <p className="font-lato font-normal text-xs text-[#FFFFFF] my-[2px] leading-5   max-w-[337px]">
                      #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                      Bangalore - 560 058
                    </p>
                  </div>
                  <div className="flex pt-[24px] gap-3 items-center text-white">
                    <FiPhone size={25} />
                    <p className="font-lato font-normal text-xs text-[#FFFFFF] my-[2px] leading-5   max-w-[337px]">
                      +91 – 80 – 42552555
                    </p>
                  </div>
                  <div className="flex pt-[24px] gap-3 items-center text-white">
                    <AiOutlineMail size={25} />
                    <p className="font-lato font-normal text-xs text-[#FFFFFF] my-[2px] leading-5   max-w-[337px]">
                      info@gem-paints.com
                    </p>
                  </div>
                </div>
                <h1 className="text-[#EEDCB2] text-3xl font-extrabold">
                  WORK IN PROGRESS
                </h1>
                <div>
                  <div>
                    <ul>
                      <li className="font-poppins text-[14px] font-bold text-[#EEDCB2]">
                        {/* About */}
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
