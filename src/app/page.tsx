"use client"

import logo from "@/../public/favicon.png";
import metricsIcon from "@/../public/metricsIcon.png";
import buserLogo from "@/../public/buser-logo.webp";
import Link from "next/link";
import Image from "next/image";

import Metrics from "@/components/Metrics";

import { Inter } from "next/font/google";
import CostPerMetric from "@/components/CostPerMetric";
import MetricsLineGraph from "@/components/MetricsLineGraph";
import MetricsDoughnutGraph from "@/components/MetricsDoughnutGraph";
import CreatorsTable from "@/components/CreatorsTable/CreatorsTable";
import useDataStore, { Influencer } from "@/store";
import { useEffect } from "react";
// import { Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
// const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

function parseUpdatedAt(updatedAt: string) {
  const date = new Date(updatedAt);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default function Home() {
  const fetchData = useDataStore((state) => state.fetchData);
  const data = useDataStore((state) => state.data);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const totalInfluencers = (data: Influencer[]) => `${data.length}`;
  const total = (data: Influencer[], dataKey: keyof Influencer) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      count = +element[`${dataKey}`];
    }

    return `${count}`
  }

  return (
    <main>
      <div className="hidden w-[82px] h-[100vh] xl:flex flex-row justify-start items-start bg-white overflow-hidden z-1 p-0 content-start flex-nowrap gap-0 fixed rounded-none border-[#475466] border-solid border-r z-10">
        <div className="w-[81px] h-[100vh] flex flex-col justify-between items-start overflow-visible flex-grow flex-shrink-0 relative p-0 content-start flex-nowrap rounded-none">
          <nav className="navbar box-border flex-shrink-0 w-100 h-min flex flex-col justify-start items-center pt-8 overflow-visible relative content-center flex-nowrap gap-6 rounded-none">
            <Link href="/">
              <Image src={logo} width={42} height={38} alt="Juicy Logo" />
            </Link>
            <div className="box-border flex-shrink-0 w-full h-[48px] flex justify-center items-start px-4 overflow-visible relative content-start flex-nowrap gap-2 rounded-none">
              <button className="btn btn-circle btn-outline box-border flex-shrink-0 w-12 h-12 flex flex-row justify-start items-start p-3 bg-[#ff77ef] overflow-hidden relative content-start flex-nowrap gap-2 rounded-full">
                <svg
                  width="20"
                  height="21"
                  viewBox="-1 -1 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.41255C0 3.73239 0 2.89231 0.32698 2.25058C0.614601 1.68609 1.07354 1.22715 1.63803 0.939529C2.27976 0.612549 3.11984 0.612549 4.8 0.612549H13.2C14.8802 0.612549 15.7202 0.612549 16.362 0.939529C16.9265 1.22715 17.3854 1.68609 17.673 2.25058C18 2.89231 18 3.73239 18 5.41255V13.8125C18 15.4927 18 16.3328 17.673 16.9745C17.3854 17.539 16.9265 17.9979 16.362 18.2856C15.7202 18.6125 14.8802 18.6125 13.2 18.6125H4.8C3.11984 18.6125 2.27976 18.6125 1.63803 18.2856C1.07354 17.9979 0.614601 17.539 0.32698 16.9745C0 16.3328 0 15.4927 0 13.8125V5.41255Z"
                    fill="white"
                  ></path>
                  <path d="M5 12.6125V14.6125V12.6125Z" fill="white"></path>
                  <path d="M9 8.61255V14.6125V8.61255Z" fill="white"></path>
                  <path d="M13 4.61255V14.6125V4.61255Z" fill="white"></path>
                  <path
                    d="M5 12.6125V14.6125M9 8.61255V14.6125M13 4.61255V14.6125M4.8 18.6125H13.2C14.8802 18.6125 15.7202 18.6125 16.362 18.2856C16.9265 17.9979 17.3854 17.539 17.673 16.9745C18 16.3328 18 15.4927 18 13.8125V5.41255C18 3.73239 18 2.89231 17.673 2.25058C17.3854 1.68609 16.9265 1.22715 16.362 0.939529C15.7202 0.612549 14.8802 0.612549 13.2 0.612549H4.8C3.11984 0.612549 2.27976 0.612549 1.63803 0.939529C1.07354 1.22715 0.614601 1.68609 0.32698 2.25058C0 2.89231 0 3.73239 0 5.41255V13.8125C0 15.4927 0 16.3328 0.32698 16.9745C0.614601 17.539 1.07354 17.9979 1.63803 18.2856C2.27976 18.6125 3.11984 18.6125 4.8 18.6125Z"
                    stroke="#0A0A0A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
          <div className="w-full h-[72px] flex flex-col justify-start items-start pb-6 px-4 overflow-visible relative content-start flex-nowrap gap-6 rounded-none">
            <Image
              src={buserLogo}
              width={48}
              height={48}
              alt="Buser Logo"
              className="btn btn-circle btn-outline border-black border-[1px] border-solid"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-min flex flex-row justify-start items-start bg-white overflow-hidden p-0 xl:pl-[82px] content-start flex-nowrap gap-0 rounded-none absolute">
        <div className="box-border flex-shrink-0 xl:w-[calc(100%-379px)] w-full h-min flex flex-col justify-start items-center pt-8 pb-12 overflow-visible content-center flex-nowrap gap-[28px] rounded-none">
          <div className="box-border flex-shrink-0 w-full h-auto flex flex-col justify-center items-start px-8 overflow-visible relative content-start flex-nowrap gap-3 rounded-none">
            <div className="breadcrumbs text-lg text-[#475466]">
              <ul>
                <li>
                  <Link href={"/"}>
                    <svg
                      width="18"
                      height="19"
                      viewBox="-1 -1 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.66667 13.1667H11.3333M7.18141 1.30333L1.52949 5.69927C1.15168 5.99312 0.962781 6.14005 0.826689 6.32405C0.706138 6.48704 0.616335 6.67065 0.561689 6.86588C0.5 7.08627 0.5 7.32558 0.5 7.80421V13.8333C0.5 14.7667 0.5 15.2335 0.681656 15.59C0.841445 15.9036 1.09641 16.1585 1.41002 16.3183C1.76654 16.5 2.23325 16.5 3.16667 16.5H12.8333C13.7668 16.5 14.2335 16.5 14.59 16.3183C14.9036 16.1585 15.1586 15.9036 15.3183 15.59C15.5 15.2335 15.5 14.7667 15.5 13.8333V7.80421C15.5 7.32558 15.5 7.08627 15.4383 6.86588C15.3837 6.67065 15.2939 6.48704 15.1733 6.32405C15.0372 6.14005 14.8483 5.99312 14.4705 5.69927L8.81859 1.30333C8.52582 1.07562 8.37943 0.961766 8.21779 0.918001C8.07516 0.879384 7.92484 0.879384 7.78221 0.918001C7.62057 0.961766 7.47418 1.07562 7.18141 1.30333Z"
                        stroke="#667085"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <p
                      className={`flex-shrink-0 w-auto h-auto whitespace-pre relative font-medium ${inter.className} text-lg leading-5]`}
                    >
                      Campanha
                    </p>
                  </Link>
                </li>
                <li>
                  <p
                    className={`flex-shrink-0 w-auto h-auto whitespace-pre relative font-medium ${inter.className} text-lg leading-5]`}
                  >
                    Experiências Buser
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <span className="flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words relative font-Balgin-Text text-[#0f1728] text-[40px] font-semibold">
                Bem vindo,{" "}
              </span>
              <span className="flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words relative font-Balgin-Display text-[#0f1728] text-[40px] font-semibold">
                Helio
              </span>
            </div>
          </div>
          <div className="box-border flex-shrink-0 w-full xl:h-[97px] h-min flex flex-col xl:justify-center justify-start items-start xl:px-[22px] px-[15px] overflow-visible relative content-start flex-nowrap xl:gap-[22px] gap-6 rounded-none">
            <div className="flex-shrink-0 w-full xl:h-auto h-min xl:flex grid xl:justify-start xl:items-center grid-cols-metric auto-rows-fr grid-rows-2 p-0 overflow-visible relative content-center flex-nowrap xl:gap-5 gap-[10px] rounded-none">
              <Metrics
                icone={metricsIcon}
                heading="Total Creators"
                metric={totalInfluencers(data)}
              />
              <Metrics icone={metricsIcon} heading="Total Posts" metric={total(data, 'posts')} />
              <Metrics
                icone={metricsIcon}
                heading="Total Feed"
                metric={total(data, 'impressions')}
              />
              <Metrics
                icone={metricsIcon}
                heading="Total Stories"
                metric={total(data, 'interactions')}
              />
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] p-0 content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start px-[15px] overflow-visible relative content-start flex-nowrap xl:gap-[22px] gap-6 rounded-none">
              <div className="flex-shrink-0 flex-grow xl:flex-grow-0 w-full h-min flex xl:flex-row flex-col justify-start items-center overflow-visible relative p-0 content-center flex-nowrap xl:gap-5 gap-[15px] rounded-none">
                <CostPerMetric
                  sigla="CPE"
                  heading="Engajamento"
                  metric="0"
                  costPerMetric={`${data[0]?.cpe}`}
                />
                <CostPerMetric
                  sigla="CPV"
                  heading="Views"
                  metric={total(data, 'videoViews')}
                  costPerMetric={`${data[0]?.cpv}`}
                />
                <CostPerMetric
                  sigla="CPC"
                  heading="Cliques"
                  metric={total(data, 'clicks')}
                  costPerMetric={`${data[0]?.cpc}`}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] px-[15px] content-start flex-nowrap xl:gap-0 gap-6 rounded-none">
            <MetricsLineGraph heading="Interações" metric={total(data, 'interactions')} />
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] p-0 content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start xl:p-0 px-[15px] overflow-visible relative content-start flex-nowrap xl:gap-[22px] gap-6 rounded-none">
              <div className="flex-shrink-0 w-full h-min flex xl:flex-row flex-col justify-start items-center overflow-visible relative p-0 content-center flex-nowrap xl:gap-5 gap-[15px] rounded-none">
                <Metrics heading="Engajamento Tik Tok" metric={total(data, 'videoViews')} />
                <Metrics heading="Cliques no Link Tik Tok" metric={total(data, 'clicks')} />
                <Metrics heading="Impressoes" metric={total(data, 'impressions')} />
              </div>
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative px-[22px] content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative content-start flex-nowrap gap-[22px] rounded-none">
              <CreatorsTable/>
            </div>
          </div>
        </div>
        <div className="hidden box-border flex-shrink-0 w-[379px] h-min xl:flex flex-col justify-start items-center pt-8 pr-8 pb-12 bg-transparent overflow-visible content-center flex-nowrap gap-[28px] rounded-none z-10">
          <div className="flex-shrink-0 w-full h-[68px] mb-[48px] flex justify-end items-center overflow-visible relative p-0 content-center flex-nowrap gap-3 rounded-none">
            <div className="flex-shrink-0 w-min h-min flex justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-3 rounded-none">
              <div className="flex-shrink-0 w-[338px] h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-2 rounded-none">
                <div className="flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-[6px] rounded-none">
                  <div className="box-border flex-shrink-0 w-full h-min flex justify-start items-center py-[10px] px-[14px] shadow-cost-per-metrics bg-white overflow-hidden relative content-center flex-nowrap gap-2 rounded-lg border border-black">
                    <div className="flex-shrink-0 flex-grow w-auto h-min flex justify-start items-center overflow-visible releative p-0 content-center flex-nowrap gap-2 rounded-none">
                      <div className="flex-shrink-0 w-5 h-5 block overflow-hidden relative aspect-square rounded-none"></div>
                      <p
                        className={`flex-shrink-0 w-auto h-auto whitespace-pre relative ${inter.className} text-[#101828] text-base text-center`}
                      >
                        Atualizado em {parseUpdatedAt(data[0]?.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={buserLogo}
              width={67}
              height={67}
              alt="Buser Logo"
              className="btn btn-circle btn-outline border-black border-[1px] border-solid"
            />
          </div>
          <Metrics heading="Investimento Total Inicial" metric="R$ 165.700,00" />
          <Metrics
            heading="Investimento Executado Estimado"
            metric="R$ 22.566,39"
          />
          <MetricsDoughnutGraph heading="Alcance Bruto" metric={total(data, 'impressions')}/>
        </div>
      </div>
    </main>
  );
}
