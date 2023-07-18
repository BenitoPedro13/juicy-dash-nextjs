import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import performanceIcon from "@/../public/performanceIcon.png";
import Image from "next/image";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import CreatorsTableRow from "./CreatorsTableRow";
import useDataStore, { Influencer } from "@/store";
import { handleSort, parseCurrencyString } from "../../../utils/utils";
import TableSortingIcon from "../TableSortingIcon";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// export interface Influencer {
//   id: number;
//   influencer: string;
//   username: string;
//   city: string;
//   posts: string;
//   impressions: string;
//   interactions: string;
//   clicks: string;
//   videoViews: string;
//   cpe: string;
//   ctr: string;
//   cpc: string;
//   cpv: string;
//   createdAt: string;
//   updatedAt: string;
// }

const CreatorsTable = () => {
  const globalData = useDataStore((state) => state.data);
  const [data, setData] = useState([...globalData]);
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Initial sort order
  const [sortColumn, setSortColumn] = useState<keyof Influencer>("influencer"); // Initial sort column

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    const sortedData = [...globalData].sort((a, b) => {
      if (sortColumn === "influencer") {
        return a.influencer.localeCompare(b.influencer);
      } else if (sortColumn === "city") {
        return a.city.localeCompare(b.city);
      } else if (sortColumn === "posts") {
        return (
          parseInt(a.posts.replaceAll(".", "")) -
          parseInt(b.posts.replaceAll(".", ""))
        );
      } else if (sortColumn === "impressions") {
        return (
          parseInt(a.impressions.replaceAll(".", "")) -
          parseInt(b.impressions.replaceAll(".", ""))
        );
      } else if (sortColumn === "interactions") {
        return (
          parseInt(a.interactions.replaceAll(".", "")) -
          parseInt(b.interactions.replaceAll(".", ""))
        );
      } else if (sortColumn === "clicks") {
        return (
          parseInt(a.clicks.replaceAll(".", "")) -
          parseInt(b.clicks.replaceAll(".", ""))
        );
      } else if (sortColumn === "videoViews") {
        return (
          parseInt(a.videoViews.replaceAll(".", "")) -
          parseInt(b.videoViews.replaceAll(".", ""))
        );
      } else if (sortColumn === "cpe") {
        return parseCurrencyString(a.cpe, b.cpe);
      } else if (sortColumn === "ctr") {
        return parseFloat(a.ctr) - parseFloat(b.ctr);
      } else if (sortColumn === "cpc") {
        parseCurrencyString(a.cpc, b.cpc)
      } else if (sortColumn === "cpv") {
        parseCurrencyString(a.cpv, b.cpv)
      }
      return 0;
    });

    if (sortOrder === "desc") {
      sortedData.reverse();
    }

    setData(sortedData);
  }, [globalData, sortColumn, sortOrder]);

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
          <Image
            src={performanceIcon}
            alt="Performance Icon"
            width={40}
            height={40}
            className="hidden sm:block"
          />
          <div className="sm:hidden flex w-full h-min flex-shrink-0 justify-between items-center flex-nowrap">
            <Image
              src={performanceIcon}
              alt="Performance Icon"
              width={40}
              height={40}
              className="sm:hidden block"
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
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort(
                    "influencer",
                    sortColumn,
                    setSortColumn,
                    setSortOrder
                  )
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Creator
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"influencer"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort("city", sortColumn, setSortColumn, setSortOrder)
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Cidade
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"city"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort("posts", sortColumn, setSortColumn, setSortOrder)
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Publicações
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"posts"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort(
                    "impressions",
                    sortColumn,
                    setSortColumn,
                    setSortOrder
                  )
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Impressões
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"impressions"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort(
                    "interactions",
                    sortColumn,
                    setSortColumn,
                    setSortOrder
                  )
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Interações
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"interactions"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort("clicks", sortColumn, setSortColumn, setSortOrder)
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Clicks
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"clicks"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort(
                    "videoViews",
                    sortColumn,
                    setSortColumn,
                    setSortOrder
                  )
                }
              >
                <div className="flex justify-start items-center gap-6">
                  Video Views
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"videoViews"}
                  />
                </div>
              </th>
              <th
                className={`cursor-pointer flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                onClick={() =>
                  handleSort("cpe", sortColumn, setSortColumn, setSortOrder)
                }
              >
                <div className="flex justify-start items-center gap-6">
                  CPE
                  <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={"cpe"}
                  />
                </div>
              </th>
              <th
                className={`flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                // onClick={() =>
                //   handleSort(
                //     "cpc",
                //     sortColumn,
                //     setSortColumn,
                //     setSortOrder
                //   )
                // }
              >
                <div className="flex justify-start items-center gap-6">
                  CPC
                  {/* <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={'cpc'}
                  /> */}
                </div>
              </th>
              <th
                className={`flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                // onClick={() =>
                //   handleSort(
                //     "cpv",
                //     sortColumn,
                //     setSortColumn,
                //     setSortOrder
                //   )
                // }
              >
                <div className="flex justify-start items-center gap-6">
                  CPV
                  {/* <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={'cpv'}
                  /> */}
                </div>
              </th>
              <th
                className={`flex-shrink-0 w-auto max-w-[215px] h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
                // onClick={() =>
                //   handleSort(
                //     "ctr",
                //     sortColumn,
                //     setSortColumn,
                //     setSortOrder
                //   )
                // }
              >
                <div className="flex justify-start items-center gap-6">
                  CTR
                  {/* <TableSortingIcon
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    actualColumn={'ctr'}
                  /> */}
                </div>
              </th>
              <th
                className={`flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words relative font-medium ${inter.className} text-[#475466] text-xs leading-[18px]`}
              >
                ...
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <CreatorsTableRow data={item} key={item.id} />;
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CreatorsTable;
