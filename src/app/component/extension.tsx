import { FaArrowRight } from "react-icons/fa";

export default function Extension() {
  return (
    <>
      <div className="w-[1920px] h-[759px] top-[2509px] left-[1px] py-[140px] px-[220px] bg-[#043873] gap-[98px] text-white flex justify-center items-center">
        <div className="w-[697px] h-[294px] gap-[60px]">
          <div className="w-[697px] h-[171px] gap-[24px]">
            <h1 className="w-[697px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] mb-6">
              Use as Extension{" "}
            </h1>
            <p className="w-[697px] h-[60px] flex gap-[24px] font-normal text-lg leading-[30px] tracking-[-2%]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
          <div className=" flex justify-center items-center gap-1 w-[171px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] mt-12 ">
            <button className="w-[67px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%] ">
              Let’s Go
            </button>
            <FaArrowRight size={14} />
          </div>
        </div>
        <div className="w-[686px] h-[479px] gap-1 bg-[#C4DEFD] flex place-items-center"></div>
      </div>
    </>
  );
}
