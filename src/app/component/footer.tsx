import Image from 'next/image';
import Logo from '@/app/assets/Logo.png';
export default function Footer(){
    return(
        <>
        <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] px-[220px] pb-[32px] gap-[200px] bg-[#043873] text-[#ffffff] ">
            <div className="w-[1480px] h-[289px] gap-[100px] ">
                <div className="flex justify-between items-center w-[1480px] h-[160px] gap-[100px] border-b-2 border-[#2E4E73] pb-28">
                    {/* first column */}
                    <div className='w-[295px] h-[169px] gap-[15px]'>
                        <Image src={Logo} alt="Logo" width={191} height={34} />
                        <p className='flex justify-start w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-tight mt-3 text-[#F7F7EE]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    {/* second column */}
                    <div  className='flex flex-col justify-start w-[295px] h-[130px] gap-[16px]'>
                    <div className='flex flex-col w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-tight'>
                        Product
                                               </div>
                                               <div className='w-[70px] h-[20px]'><p className='font-normal text-base leading-[20px] tracking-tight text-[#FFE492]'>Overview</p></div>
                        <div className='w-[50px] h-[20px]'><p className='font-normal text-base leading-[20px] tracking-tight'>Pricing</p></div>
                        <div className='w-[177px] h-[20px]'><p className='font-normal text-base leading-[20px] tracking-tight'>Customer stories</p></div>
  
                        </div>  
                    {/* third column */}
                    <div className='flex flex-col justify-start w-[295px] h-[130px] gap-[16px]'>
                        <div className='w-[91px] h-[22px] font-bold text-lg leading-[21.78px] tracking-tight'>Resources</div>
                        <div className='w-[33px] h-[20px] font-normal text-base leading-[20px] tracking-tight'>Blog</div>
                        <div  className='w-[128px] h-[20px] font-normal text-base leading-[20px] tracking-tight'>Guides & tutorials</div>
                        <div  className='w-[130px] h-[20px] font-normal text-base leading-[20px] tracking-tight'>Help center</div>
                    </div>
                    {/* fourth column */}
                    <div className='flex flex-col justify-start w-[295px] h-[130px] gap-[16px] '>
                        <div className='w-[83px] h-[22px] font-bold text-lg leading-[21.78px] tracking-tight'>Company</div>
                        <div className='w-[66px] h-[20px] font-normal text-base leading-[20px] tracking-tight'>About us</div>
                        <div  className='w-[62px] h-[20px] font-normal text-base leading-[20px] tracking-tight'>Careers</div>
                        <div  className='w-[99px] h-[20px] font-normal text-base leading-[20px] tracking-tight'>Media kit</div>
                    </div>
                    {/* last line */}
                </div>
                
                <div className="flex justify-center  w-[1480px] h-5 mt-5">
                    <div className="w-[169px] h-5 ">
                        <p className="font-normal text-base leading-[20px] tracking-tight ">&copy; 2021 Whitepace LLC.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}