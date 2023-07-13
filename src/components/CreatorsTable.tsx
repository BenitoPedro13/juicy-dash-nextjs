import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const CreatorsTable = () => {
  return (
    <div className="box-border w-full h-[339px] flex flex-col justify-start items-start bg-white overflow-hidden p-0 content-start flex-nowrap gap-0 rounded-xl border border-black">
      <div className="flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative p-o content-start flex-nowrap gap-5 rounded-none">
        <div className="box-border flex-shrink-0 w-full h-min flex justify-start items-center pt-5 px-6 overflow-visible relative content-center flex-nowrap gap-4 rounded-none">
          <img
            src="/performanceIcon.png"
            alt="Performance Icon"
            width="40"
            height="40"
          />
          <div className="flex-shrink-0 flex-grow w-auto h-full flex flex-col justify-center items-start overflow-visible relative p-0 content-start flex-nowrap gap-1 rounded-none">
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
          <div className="flex-shrink-0 w-min h-min flex justify-start items-center overflow-visible relative p-0 content-center flex-nowrap gap-3 rounded-none">
            <div className="box-border flex-shrink-0 w-min h-auto flex justify-center items-center py-[10px] px-[8px] shadow-cost-per-metrics bg-white overflow-hidden self-stretch relative content-center flex-nowrap gap-2 rounded-lg border border-solid border-[#cfd4dc]">
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
            </div>
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Creator</th>
              <th>Cidade</th>
              <th>Publicações</th>
              <th>Impressões</th>
              <th>Interações</th>
              <th>Clicks</th>
              <th>Video Views</th>
              <th>CPE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorsTable;
