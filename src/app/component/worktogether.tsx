import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Logo1 from "@/app/assets/logo1.png";
export default function Worktogether() {
  return (
    <>
      <div className="flex flex-col justify-center w-[1920px] h-[1588px] top-[921px] left-[1px] py-[140px] px-[220px] gap-[100px]">
        {/* first container start*/}
        <div className="flex justify-between items-center w-[1480px] h-[547px] gap-[60px] ">
          <div className="w-[672px] h-[411px] gap-[60px]  ">
            <div className="w-[672px] h-[288px] gap-[24px] mb-10">
              <div className="w-[672px] h-[174px] mb-6 ">
                <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-2%] text-[#212529]">
                  Project Management
                </h1>
              </div>
              <div className="w-[672px] h-[90px]">
                <p className="font-normal text-lg leading-[30px] tracking-[-2%] text-[#212529]  ">
                  Images, videos, PDFs and audio files are supported. Create
                  math expressions and diagrams directly from the app. Take
                  photos with the mobile app and save them to a note.
                </p>
              </div>
            </div>
            <div className="w-[201px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] text-[#ffffff] flex justify-between items-center ">
              <button className="w-[97px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%] ">
                Get Started
              </button>
              <FaArrowRight size={14} />
            </div>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD] gap-[1px] flex "></div>
        </div>
        {/* second container start */}
        <div className="flex justify-between items-center w-[1480px] h-[661px] gap-[100px] ">
          <div className="flex w-[710px] h-[661px]  ">
            <div className="w-[661px] h-[661px] border-2 border-dashed border-[#A7CEFC] rounded-full relative left-[35px]">
              <div className="w-[70px] h-[70px] bg-[#FFDC4D] rounded-full absolute top-[5px] left-[140px]"></div>
              <div className="w-[70px] h-[70px] bg-[#37A3FF] rounded-full absolute top-[101px] left-[564px]"></div>
              <div className="w-[70px] h-[70px] bg-[#5fda8e] rounded-full absolute top-[401px] left-[610px]"></div>
              <div className="w-[70px] h-[70px] bg-[#37A3FF] rounded-full absolute top-[578px] left-[137px]"></div>
              <div className="w-[70px] h-[70px] bg-[#FF5758] rounded-full absolute top-[296px] left-[-35px]"></div>

              <div className="flex items-center w-[387px] h-[387px] relative top-[137px] left-[142px] border-2 border-dashed border-[#A7CEFC] rounded-full      ">
                <div className="w-[70px] h-[70px] bg-[#5fda8e] rounded-full absolute top-[-32px] left-[162px]"></div>
                <div className="w-[70px] h-[70px] bg-[#37A3FF] rounded-full absolute top-[166px] left-[354px]"></div>
                <div className="w-[70px] h-[70px] bg-[#FFBF60] rounded-full absolute top-[349px] left-[161px]"></div>
                <div className="w-[70px] h-[70px] bg-[#37A3FF] rounded-full absolute top-[166px] left-[-30px]"></div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] absolute top-[1981px] left-[568px] bg-white  rounded-[10px] shadow-lg ">
              <Image
                src={Logo1}
                alt="Logo"
                className="w-[51px] h-[44px]  top-[309px] left-[348px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-[670px] h-[294px] gap-[60px]">
            <div className=" w-[670px] h-[171px] gap-6">
              <div className=" w-[670px] h-[87px] text-[#212529] gap-6">
                <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-6">
                  Work together
                </h1>
                <div className="w-[670px] h-[60px]">
                  <p className="font-normal text-lg leading-[30px] tracking-[-2%]">
                    With whitepace, share your notes with your colleagues and
                    collaborate on them. You can also publish a note to the
                    internet and share the URL with others.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-[186px] h-[63px] rounded-md py-[20px] px-10 gap-[10px] bg-[#4F9CF9] text-[#ffffff] mt-32">
                <button className="w-[82px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%] ">Try it now</button> 
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
