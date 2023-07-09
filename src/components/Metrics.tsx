/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import React from "react";
// import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

type MetricsProps = {
  icone?: StaticImageData;
  heading: string;
  metric: string;
};

const Metrics = ({ icone, heading, metric }: MetricsProps) => {
  return (
    <div className="box-border w-1/4 h-min flex justify-start items-center p-4 shadow-metrics hover:shadow-metrics-hover bg-white overflow-visible content-center flex-nowrap gap-[10px] rounded-xl border-black border">
      {icone ? (
        <Image
          src={icone}
          alt={`${heading} Icon`}
          width={40}
          height={40}
          className="flex-shrink-0 w-10 h-10 block overflow-visible relative rounded-none"
        />
      ) : null}

      <div className="box-border flex-shrink-0 flex-grow w-auto h-auto flex justify-start items-end overflow-visible relative p-0 content-end flex-nowrap gap-4 rounded-lg border border-transparent">
        <div className="flex-shrink-0 flex-grow w-auto h-auto flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-1 rounded-none">
          <h5
            className={`flex-shrink-0 w-auto h-auto whitespace-pre relative font-medium ${jakarta.className} text-[#475466] text-sm`}
          >
            {heading}
          </h5>
          <p className="flex-shrink-0 w-auto h-auto whitespace-pre relative font-Balgin-Display font-bold text-[#0f1728] text-3xl leading-[38px]">
            {metric}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
