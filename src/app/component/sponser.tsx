import Image from "next/image"
import Apple from '@/app/assets/Apple.png';
import Google from '@/app/assets/Google.png';
import Group from '@/app/assets/Group.png';
import Microsoft from '@/app/assets/Microsoft.png';
export default function Sponser(){
    return(
        <>
        <div className="w-[1920px] h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px]">
          <div className="w-[1482px] h-[87px]">
            <h1 className="font-bold text-7xl leading-[87.14px] tracking-tight text-center text-[#212529]">Our sponsors</h1>
          </div>
          <div className="flex justify-between items-center w-[1482px] h-[71px] mt-24 ">
            <div className="w-[55.47px] h-[68px] gap-1">
              <Image
              src ={Apple}
              alt = " Apple logo "
              width={55.47}
              height={51.63}
              className="top-[16.37px] gap-1" />
              </div>
              <div className="w-[287px] h-[62px] gap-1">
              <Image
              src ={Microsoft}
              alt = " Micro Soft" 
              width={287}
              height={62}
              className="gap-1" />
              </div>
              <div className="w-[280px] h-[71px] gap-1">
              <Image
              src ={Group}
              alt = " Slack " 
              width={287}
              height={62}
              className="gap-1"/>
              </div>
              <div className="w-[211px] h-[69.81px] gap-1">
              <Image
              src ={Google}
              alt = " Google"
              width={211}
              height={69.81}
              className="gap-1" />
              </div>
          </div>
        </div>
        </>
    )
}