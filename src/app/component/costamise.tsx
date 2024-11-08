import { FaArrowRight } from "react-icons/fa"
export default function costamise(){
    return(
        <div className="flex justify-between items-center w-[1920px] h-[812.09px] top-[3268px] left-[1px] py-[140px] px-[220px] gap-[98px]">
            <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>
        <div className="flex flex-row justify-between w-[669px] h-[411px] gap-[60px]">
            <div className=" w-[669px] h-[228px] gap-6">
              <div className=" w-[669px] h-[174px] text-[#212529]">
                <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-6">
                Customise it
                to your needs
                </h1>
                <div className="w-[669px] h-[90px]">
                  <p className="font-normal text-lg leading-[30px] tracking-[-2%]">
                  Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-[171px] h-[63px] rounded-lg py-[20px] px-10 gap-[10px] bg-[#4F9CF9] text-[#ffffff] mt-32">
                <button className="w-[67px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%] ">Let’s Go</button> 
                <FaArrowRight size={14} />
              </div>
            </div>
            </div>
            
            </div>
    );
}