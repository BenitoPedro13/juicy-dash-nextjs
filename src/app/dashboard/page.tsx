"use client";

import metricsIcon from "@/../public/metricsIcon.png";
import buserLogo from "@/../public/buser-logo.webp";
import Link from "next/link";
import Image from "next/image";
import { parseCookies } from "nookies";

import Metrics from "@/components/Metrics";

import { Inter } from "next/font/google";
import CostPerMetric from "@/components/CostPerMetric";
import MetricsLineGraph from "@/components/MetricsLineGraph";
import SidenavDesktop from "@/components/SidenavDesktop";
import MetricsDoughnutGraph from "@/components/MetricsDoughnutGraph";
import CreatorsTable from "@/components/CreatorsTable/CreatorsTable";
import useDataStore, { Influencer } from "@/store";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import FinancialMetrics from "@/components/FinancialMetrics/FinancialMetrics";
import ContactCTA from "@/components/CTA/ContactCTA";
import AttachmentsTable from "@/components/AttachmentsTable/AttachmentsTable";
import { parseUpdatedAt } from "../../../utils/utils";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
// import { Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
// const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  const session = useDataStore((state) => state.session);
  const fetchData = useDataStore((state) => state.fetchData);
  const fetchAttachment = useDataStore((state) => state.fetchAttachment);
  const {data, updatedAt} = useDataStore((state) => state.data);
  const router = useRouter();

  useEffect(() => {
    if(!session.isAuthenticated) {
      router.push('/')
    }
  }, [router, session.isAuthenticated]);

  useEffect(() => {
    const { 'juicy-admin-token' :access_token} = parseCookies()
    fetchData(access_token);
    fetchAttachment(access_token)
  }, [fetchData, fetchAttachment]);

  const totalInfluencers = (data: Influencer[]) => `${data.length}`;
  const total = (data: Influencer[], dataKey: keyof Influencer) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      count += Number.parseInt(
        (element[`${dataKey}`] as string).replaceAll(".", "")
      );
    }

    return count.toLocaleString("PT-BR");
  };
  
    
  return (<main>
      <SidenavDesktop />
      <div className="w-full h-full flex xl:flex-row flex-col justify-start items-start bg-white overflow-hidden p-0 xl:pl-[82px] content-start flex-nowrap gap-0 rounded-none">
        <div className="box-border flex-shrink-0 xl:w-[calc(100%-379px)] w-full h-min flex flex-col justify-start items-center xl:pt-8 xl:pb-12 py-[15px] overflow-visible content-center flex-nowrap xl:gap-[28px] gap-[15px] rounded-none">
          <div className="box-border flex-shrink-0 w-full xl:h-auto h-min flex flex-col justify-center items-start xl:px-8 px-[15px] overflow-visible relative content-start flex-nowrap gap-3 rounded-none">
            <Breadcrumb />
            <div className="">
              <span className="flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words relative font-Balgin-Text text-[#0f1728] text-[40px] font-semibold">
                Bem vindo,{" "}
              </span>
              <span className="flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words relative font-Balgin-Display text-[#0f1728] text-[40px] font-semibold capitalize">
                {session.user.name}
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
              <Metrics
                icone={metricsIcon}
                heading="Total Posts"
                metric={total(data, "posts")}
              />
              <Metrics icone={metricsIcon} heading="Total Feed" metric={`6`} />
              <Metrics
                icone={metricsIcon}
                heading="Total Stories"
                metric={`11`}
              />
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] p-0 content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start xl:p-0 px-[15px] overflow-visible relative content-start flex-nowrap xl:gap-[22px] gap-6 rounded-none">
              <div className="flex-shrink-0 flex-grow xl:flex-grow-0 w-full h-min flex xl:flex-row flex-col justify-start items-center overflow-visible relative p-0 content-center flex-nowrap xl:gap-5 gap-[15px] rounded-none">
                <CostPerMetric
                  sigla="CPE"
                  heading="Engajamento"
                  metric="0"
                  costPerMetric={total(data, "cpe")}
                />
                <CostPerMetric
                  sigla="CPV"
                  heading="Views"
                  metric={total(data, "videoViews")}
                  costPerMetric={`${data[0]?.cpv}`}
                />
                <CostPerMetric
                  sigla="CPC"
                  heading="Cliques"
                  metric={total(data, "clicks")}
                  costPerMetric={`${data[0]?.cpc}`}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] px-[15px] content-start flex-nowrap xl:gap-0 gap-6 rounded-none">
            <MetricsLineGraph
              heading="Interações"
              metric={total(data, "interactions")}
            />
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] p-0 content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start xl:p-0 px-[15px] overflow-visible relative content-start flex-nowrap xl:gap-[22px] gap-6 rounded-none">
              <div className="flex-shrink-0 w-full h-min flex xl:flex-row flex-col justify-start items-center overflow-visible relative p-0 content-center flex-nowrap xl:gap-5 gap-[15px] rounded-none">
                <Metrics
                  heading="Engajamento Tik Tok"
                  metric={total(data, "videoViews")}
                />
                <Metrics
                  heading="Cliques no Link Tik Tok"
                  metric={total(data, "clicks")}
                />
                <Metrics
                  heading="Impressoes"
                  metric={total(data, "impressions")}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] px-[15px] content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative content-start flex-nowrap gap-6 rounded-none">
              <CreatorsTable />
            </div>
          </div>
          <div className="w-full flex-shrink-0 h-min flex flex-col justify-start items-start overflow-visible relative xl:px-[22px] px-[15px] content-start flex-nowrap gap-6 rounded-none">
            <div className="box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative content-start flex-nowrap gap-6 rounded-none">
              <AttachmentsTable />
            </div>
          </div>
          <div className="xl:hidden box-border flex-shrink-0 xl:w-[379px] w-full flex-grow h-min flex flex-col justify-start items-center xl:pt-8 xl:pr-8 pb-10 px-[15px] bg-transparent overflow-visible content-center flex-nowrap xl:gap-[28px] gap-[15px] rounded-none z-10">
            <MetricsDoughnutGraph
              heading="Alcance Bruto"
              metric={total(data, "impressions")}
            />
            <Metrics
              heading="Investimento Total Inicial"
              metric={`${session.user.totalInitialInvestment}`}
            />
            <Metrics
              heading="Investimento Executado Estimado"
              metric={`${session.user.estimatedExecutedInvestment}`}
            />
            <FinancialMetrics />
            <ContactCTA />
          </div>
          <Footer />
        </div>
        <div className="hidden box-border flex-shrink-0 xl:w-[379px] w-auto flex-grow h-min xl:flex flex-col justify-start items-center pt-8 pr-8 pb-12 bg-transparent overflow-visible content-center flex-nowrap gap-[28px] rounded-none z-10">
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
                        Atualizado em {parseUpdatedAt(updatedAt)}
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
          <Metrics
            heading="Investimento Total Inicial"
            metric={`${session.user.totalInitialInvestment}`}
          />
          <Metrics
            heading="Investimento Executado Estimado"
            metric={`${session.user.estimatedExecutedInvestment}`}
          />
          <MetricsDoughnutGraph
            heading="Alcance Bruto"
            metric={total(data, "impressions")}
          />
          <FinancialMetrics />
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}
