import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="w-[1920px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[#043873] text-white flex justify-center items-center">
        <div className="w-[656px] h-[361px]">
          <div className="w-[656px] h-p[238px]">
            <h1 className="font-bold text-[64px] leading-[77.45px] tracking-[-2%] mb-6">
              Get More Done with whitepace
            </h1>
            <p className="w-[656px] h-[60px] flex gap-[24px] font-normal text-lg leading-[30px] tracking-[-2%]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <div className="w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] mt-12 flex justify-between items-center">
            <button className="w-[159px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] flex  items-center">
              Try Whitepace free
            </button>
            <FaArrowRight size={14} />
           </div>
          </div>
        <div className="w-[824px] h-[549px] gap-1 bg-[#C4DEFD] flex "></div>
      </div>
    </>
  );
}
