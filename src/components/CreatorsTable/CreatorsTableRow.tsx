import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Influencer, baseApiUrl } from "@/store";
import Image from "next/image";
import avatar from "@/../public/avatar.jpeg";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type CreatorsTableRowProps = {
  data: Influencer;
};

const CreatorsTableRow = ({ data }: CreatorsTableRowProps) => {
  return (
    <tr>
      <td>
        <div className="flex-shrink-0 flex justify-start items-center overflow-visible content-center flex-nowrap p-0 gap-[6px]">
          <div className="avatar">
            <div className="mask mask-squircle w-[38px] h-[38px] aspect-square block rounded-full">
              {!data["Url Foto Perfil"] ? (
                <div className="btn btn-circle btn-outline border-black border-[1px] border-solid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-[38px] h-[38px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              ) : (
                <img
                  src={`${data["Url Foto Perfil"]}`}
                  width="67"
                  height="67"
                  alt={`${data} Logo`}
                  className="btn btn-circle btn-outline border-black border-[1px] border-solid"
                />
              )}
            </div>
          </div>
          <div className="flex-shrink-0 w-min h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-0 rounded-none">
            <h5
              className={`flex-shrink-0 w-auto h-auto whitespace-nowrap relative font-medium ${inter.className} text-[#0f1728] text-sm`}
            >
              {data.Influencer}
            </h5>
            <p
              className={`flex-shrink-0 w-auto h-auto whitespace-nowrap relative ${inter.className} text-[#475466] text-sm`}
            >
              @{data.Username}
            </p>
          </div>
        </div>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-pre-wrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Cidade}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Posts}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Stories}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Feed}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Tiktok}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Impressoes}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Interacoes}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Cliques}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data["Video Views"]}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.Engajamento}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data["Engajamento Tiktok"]}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data["Cliques Tiktok"]}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data["Impressoes Tiktok"]}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.CPE}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.CPC}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.CPV}
        </p>
      </td>
      <td>
        <p
          className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}
        >
          {data.CTR}
        </p>
      </td>
      <th>
        <button className="btn btn-ghost p-0 text-xs h-6 min-h-[24px] !bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#475466"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default CreatorsTableRow;
