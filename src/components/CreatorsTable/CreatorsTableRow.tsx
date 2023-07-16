import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Influencer } from "@/store";
import Image from "next/image";
import avatar from '@/../public/avatar.jpeg'

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type CreatorsTableRowProps = {
  data: Influencer
}

const CreatorsTableRow = ({ data }: CreatorsTableRowProps) => {
  return (
            <tr>
              <td>
                <div className="flex-shrink-0 flex justify-start items-center overflow-visible content-center flex-nowrap p-0 gap-[6px]">
                  <div className="avatar">
                    <div className="mask mask-squircle w-[38px] h-[38px] aspect-square block rounded-full">
                      <Image
                        // src={data.profilePictureUrl}
                        src={avatar}
                        alt="Avatar Picture"
                        width={38}
                        height={38}
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-min h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-0 rounded-none">
                    <h5 className={`flex-shrink-0 w-auto h-auto whitespace-nowrap relative font-medium ${inter.className} text-[#0f1728] text-sm`}>{data.influencer}</h5>
                    <p className={`flex-shrink-0 w-auto h-auto whitespace-nowrap relative ${inter.className} text-[#475466] text-sm`}>@{data.username}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-pre-wrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.city}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.posts}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.impressions}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.interactions}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.clicks}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.videoViews}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.cpe}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.cpc}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.cpv}</p>
              </td>
              <td>
                <p className={`flex-shrink-0 flex-grow w-auto h-auto whitespace-nowrap break-words relative ${inter.className} text-[#475466] text-sm`}>{data.ctr}</p>
              </td>
              <th>
                <button className="btn btn-ghost p-0 text-xs h-6 min-h-[24px] !bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#475466" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
              </th>
            </tr>
  );
};

export default CreatorsTableRow;
