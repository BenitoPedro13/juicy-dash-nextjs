"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import CreatorsTableRow from "./CreatorsTableRow";
import useDataStore from "@/store";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const CreatorsTable = () => {
  const data = useDataStore((state) => state.data);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <motion.div
      className="box-border w-full flex flex-col justify-start items-start bg-white overflow-hidden p-0 content-start flex-nowrap gap-0 rounded-xl border border-black"
      initial={false}
      animate={{
        boxShadow: "2px 2px 2px 0px rgba(16, 24, 40, 0.06)",
        height: open ? "fit-content" : "335px",
      }}
      transition={{ duration: 0.3, ease: "linear" }}
      whileHover={{ boxShadow: "2px 2px 0px 0px #000000" }}
    >
      <div className="flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap sm:gap-5 gap-0 rounded-none">
        <div className="box-border flex-shrink-0 w-full h-min flex sm:flex-row flex-col justify-start sm:items-center items-start xl:pt-5 xl:pb-0 py-5 px-6 overflow-visible relative sm:content-center content-start flex-nowrap gap-4 rounded-none">
            <img
              src="/performanceIcon.png"
              alt="Performance Icon"
              width="40"
              height="40"
              className="hidden sm:block"
            />
          <div className="sm:hidden flex w-full h-min flex-shrink-0 justify-between items-center flex-nowrap">
            <img
              src="/performanceIcon.png"
              alt="Performance Icon"
              width="40"
              height="40"
            />
            <div className="flex-shrink-0 w-min h-min flex justify-start items-center overflow-visible relative p-0 content-center flex-nowrap gap-3 rounded-none">
              <motion.div
                onClick={toggleOpen}
                className="btn btn-ghost box-border flex-shrink-0 w-min h-auto flex justify-center items-center py-[10px] px-[8px] shadow-cost-per-metrics bg-white overflow-hidden self-stretch relative content-center flex-nowrap gap-2 rounded-lg border border-solid border-[#cfd4dc]"
                initial={false}
                animate={{ rotate: open ? -90 : 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2d3442"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow w-auto sm:h-full h-[52px] flex flex-col justify-center items-start overflow-visible relative p-0 content-start flex-nowrap gap-1 rounded-none">
            <h3
              className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-pre-wrap break-words relative font-semibold ${jakarta.className} text-[#0f1728] text-lg`}
            >
              Performance dos Creators
            </h3>
            <p
              className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-pre-wrap break-words relative ${inter.className} text-[#475466] text-sm`}
            >
              Acompanhe a tabela de todos os dados dos seus creators
            </p>
          </div>
          <div className="hidden sm:flex flex-shrink-0 w-min h-min justify-start items-center overflow-visible relative p-0 content-center flex-nowrap gap-3 rounded-none">
              <motion.div
                onClick={toggleOpen}
                className="btn btn-ghost box-border flex-shrink-0 w-min h-auto flex justify-center items-center py-[10px] px-[8px] shadow-cost-per-metrics bg-white overflow-hidden self-stretch relative content-center flex-nowrap gap-2 rounded-lg border border-solid border-[#cfd4dc]"
                initial={false}
                animate={{ rotate: open ? -90 : 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2d3442"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </motion.div>
            </div>
        </div>
        <svg
          width="1098"
          height="3"
          viewBox="-1 -1 1098 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1096 1H0V0H1096V1Z"
            fill="#EAECF0"
          ></path>
        </svg>
      </div>
      <div className="overflow-x-auto w-full no-scrollbar">
        <table className="table">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-box flex-shrink-0 w-full h-min bg-[#f8f9fb] overflow-visible relative content-center flex-nowrap gap-[5px] rounded-none border-b border-[#eaecf0]">
              <th
                className={`flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Creator
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Cidade
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Publicações
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Impressões
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Interações
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Clicks
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                Video Views
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                CPE
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                CPC
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                CPV
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                CTR
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                ...
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => {
                return <CreatorsTableRow data={item} key={item.id}/>
              })
            }
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CreatorsTable;
