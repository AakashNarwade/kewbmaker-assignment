import Image from "next/image";
import Link from "next/link";
// position: sticky;
// top: 0;
// left: 0;
// right: 0;
// z-index: 1000;
export default function Navbar() {
  return (
    <>
      <header className="bg-[#0060af] py-2 sticky top-0  left-0 right-0 w-full z-50 h-[88px] ">
        <div className="mx-auto px-3">
          <div className="px-24 flex justify-between items-center ml-[12px]">
            <Image
              src=" https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
              alt="Logo Picture"
              width={150}
              height={48}
              onError={(e) => {
                e.currentTarget.src = "/logo.webp"; // Path to a fallback image in your public directory
              }}
            />
            <div className="">
              <div className="space-x-4 font-semibold capitalize text-sm flex justify-center items-center gap-[30px]  ">
                <Link href="/" className="text-white hover:text-gray-300">
                  About
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300">
                  Category
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-gray-300"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Colours
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Downloads
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Become A Dealer
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Contact
                </Link>
                <button className="relative border px-[15px] py-[8px] text-[#0060af] bg-white rounded-full cursor-pointer overflow-hidden enquiryBtn font-custom text-[16px]">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// border: 1px solid;
// padding: 8px 15px;
// color: #0060af !important;
// border-radius: 20px;
// background-color: #fff;
// cursor: pointer;
// z-index: 1;
// position: relative;
