import { FaArrowRight } from "react-icons/fa";

export default function Yourwork() {
  return (
    <div className="flex justify-center items-center w-[1920px] h-[574px] py-[140px] px-[220px] bg-[#043873] text-[#ffffff]">
    <div className="flex flex-col justify-center items-center w-full max-w-[1481px] h-full gap-[40px]">
      {/* Heading and Paragraph Container */}
      <div className="flex flex-col items-center w-full max-w-[1064px] gap-6">
        <h1 className="font-bold text-6xl leading-[87.14px] tracking-tight text-center whitespace-nowrap">
          Your work, everywhere you are
        </h1>
        <p className="font-normal text-lg leading-[30px] tracking-tight text-center mt-6">
          Access your notes from your computer, phone, or tablet by synchronizing
          with various services, including Whitepace, Dropbox, and OneDrive. The
          app is available on Windows, macOS, Linux, Android, and iOS. A terminal
          app is also available!
        </p>
      </div>
      {/* Button Container */}
      <div className="flex justify-center items-center w-[195px] h-[63px] rounded-lg py-5 px-4 gap-2 bg-[#4F9CF9]">
        <button className="font-medium text-lg leading-[23px] tracking-tight">
          Try Taskey
        </button>
        <FaArrowRight size={14} />
      </div>
    </div>
  </div>
  
  );
}
