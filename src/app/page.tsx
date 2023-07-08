import logo from "@/../public/favicon.png";
import buserLogo from "@/../public/buser-logo.webp"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[82px] h-[100vh] flex flex-row justify-start items-start bg-white overflow-hidden z-1 p-0 content-start flex-nowrap gap-0 fixed rounded-none border-[#475466] border-solid border-0">
        <div className="w-[81px] h-[100vh] flex flex-col justify-between items-start overflow-visible flex-grow flex-shrink-0 relative p-0 content-start flex-nowrap rounded-none">
          <nav className="navbar bg-white box-border flex-shrink-0 w-100 h-min flex flex-col justify-start items-center pt-8 overflow-visible relative content-center flex-nowrap gap-6 rounded-none">
            <Link href="/">
              <Image src={logo} width={42} height={38} alt="Juicy Logo" />
            </Link>
            <div className="box-border flex-shrink-0 w-full h-[48px] flex justify-center items-start px-4 overflow-visible relative content-start flex-nowrap gap-2 rounded-none">
              <button className="btn btn-circle box-border flex-shrink-0 w-12 h-12 flex flex-row justify-start items-start p-3 bg-[#ff77ef] overflow-hidden relative content-start flex-nowrap gap-2 rounded-full">
                <svg width="20" height="21" viewBox="-1 -1 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5.41255C0 3.73239 0 2.89231 0.32698 2.25058C0.614601 1.68609 1.07354 1.22715 1.63803 0.939529C2.27976 0.612549 3.11984 0.612549 4.8 0.612549H13.2C14.8802 0.612549 15.7202 0.612549 16.362 0.939529C16.9265 1.22715 17.3854 1.68609 17.673 2.25058C18 2.89231 18 3.73239 18 5.41255V13.8125C18 15.4927 18 16.3328 17.673 16.9745C17.3854 17.539 16.9265 17.9979 16.362 18.2856C15.7202 18.6125 14.8802 18.6125 13.2 18.6125H4.8C3.11984 18.6125 2.27976 18.6125 1.63803 18.2856C1.07354 17.9979 0.614601 17.539 0.32698 16.9745C0 16.3328 0 15.4927 0 13.8125V5.41255Z" fill="white"></path>
                  <path d="M5 12.6125V14.6125V12.6125Z" fill="white"></path>
                  <path d="M9 8.61255V14.6125V8.61255Z" fill="white"></path>
                  <path d="M13 4.61255V14.6125V4.61255Z" fill="white"></path>
                  <path d="M5 12.6125V14.6125M9 8.61255V14.6125M13 4.61255V14.6125M4.8 18.6125H13.2C14.8802 18.6125 15.7202 18.6125 16.362 18.2856C16.9265 17.9979 17.3854 17.539 17.673 16.9745C18 16.3328 18 15.4927 18 13.8125V5.41255C18 3.73239 18 2.89231 17.673 2.25058C17.3854 1.68609 16.9265 1.22715 16.362 0.939529C15.7202 0.612549 14.8802 0.612549 13.2 0.612549H4.8C3.11984 0.612549 2.27976 0.612549 1.63803 0.939529C1.07354 1.22715 0.614601 1.68609 0.32698 2.25058C0 2.89231 0 3.73239 0 5.41255V13.8125C0 15.4927 0 16.3328 0.32698 16.9745C0.614601 17.539 1.07354 17.9979 1.63803 18.2856C2.27976 18.6125 3.11984 18.6125 4.8 18.6125Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </nav>
          <div className="w-full h-[72px] flex flex-col justify-start items-start pb-6 px-4 overflow-visible relative content-start flex-nowrap gap-6 rounded-none">
            <Image src={buserLogo} width={48} height={48} alt="Buser Logo" className="btn btn-circle border-black border-[1px] border-solid"/>
          </div>
        </div>
      </div>
      <div className="w-[94%] h-full flex flex-row justify-start items-start bg-white overflow-hidden p-0 content-start flex-nowrap gap-0 rounded-none">
        <div className="">main</div>
        <div className="">side panel</div>
      </div>
    </main>
  );
}
