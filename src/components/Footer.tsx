import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-6 rounded-none">
      <footer className="box-border w-full h-min flex flex-col justify-start items-center pt-16 pb-12 bg-white overflow-visible content-center flex-nowrap gap-16 rounded-none">
        <div className="box-border flex-shrink-0 flex-grow w-auto h-min flex flex-col justify-start items-start px-8 overflow-visible relative content-start flex-nowrap gap-12 rounded-none"></div>
        <div className="box-border flex-shrink-0 flex-grow w-auto h-min flex flex-col justify-start items-start px-8 overflow-visible relative content-start flex-nowrap gap-[22px] rounded-none">
          <div className="box-border flex-shrink-0 w-full h-min flex justify-start items-center pt-8 overflow-visible relative content-center flex-nowrap gap-8 rounded-none border-[#eaecf0] border-solid border-t">
            <p
              className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-pre-wrap break-words relative ${jakarta.className} text-[#475466] text-base`}
            >
              © 2023 Juicy Technology. Todos os direitos reservados.
            </p>
            <div className="flex-shrink-0 w-min h-min flex justify-start items-center overflow-visible relative p-0 content-center flex-nowrap gap-6 rounded-none">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-slate-400"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-slate-400"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-slate-400"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
            </div>
          </div>
          <p
            className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-pre-wrap break-words relative ${jakarta.className} text-[#667084] text-[10px] leading-[1.2]`}
          >
            Por favor, note que esta plataforma está atualmente na fase Alfa de
            desenvolvimento. Isso significa que estamos ativamente testando e
            aprimorando suas funcionalidades. Durante este período, é possível
            que você encontre instabilidades ou mudanças. Agradecemos sua
            paciência e compreensão. Seu feedback é extremamente valioso para
            nós nesta etapa. Obrigado por apoiar nosso compromisso contínuo com
            a melhoria e inovação.
          </p>
        </div>
      </footer>
    </div>
    // <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full h-fit">
    //   <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-12 py-12 bg-white">
    //     <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 px-4">
    //       <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
    //         <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
    //           <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
    //             Product
    //           </p>
    //           <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Overview
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Features
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Solutions
    //                 </p>
    //               </div>
    //               <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-xs leading-[18px] font-medium text-center text-[#027a48]">
    //                   New
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Tutorials
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Pricing
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Releases
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
    //           <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
    //             Social
    //           </p>
    //           <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Twitter
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   LinkedIn
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Facebook
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   GitHub
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   AngelList
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Dribbble
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="box-border flex flex-col justify-start items-start flex-grow basis-full relative gap-4">
    //           <p className={`${jakarta.className} whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-sm leading-5 font-semibold text-left text-[#667085]`}>
    //             Legal
    //           </p>
    //           <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Terms
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Privacy
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Cookies
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Licenses
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Settings
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    //               <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
    //                 <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 text-base leading-6 font-semibold text-left text-[#475467]">
    //                   Contact
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 px-4">
    //       <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 pt-8 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
    //         <div className="box-border flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
    //           <div className="flex flex-row items-start p-0 h-8 w-auto cursor-pointer">
    //             <div className="h-8 w-auto">
    //               <Link href='/'>
    //                 <Image src={logo} width={88} height={undefined} alt='Logo'/>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch text-base leading-6 text-left text-[#667085]">
    //           © 2023 Untitled UI. All rights reserved.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
