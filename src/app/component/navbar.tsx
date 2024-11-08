import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
export default function Navbar() {
  return (
    <>
      <div className="w-[1920px] h-[92px] py-4 px-[220px] border-b-2 border-[#2E4E73] bg-[#043873] text-white flex justify-between items-center">
        <div className="w-[191px] h-[34px]">
          <Image src={Logo} alt="logo" />
        </div>

        <div className="w-[737.5px] h-[60px] flex justify-between items-center">
          <div className="w-[549px] h-[23px] ">
            <ul className="flex flex-row justify-between ">
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px]  ">
            <button className="rounded-lg py-4 px-10 bg-[#FFE492]">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
