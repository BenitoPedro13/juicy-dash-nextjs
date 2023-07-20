import useDataStore from "@/store";
import React from "react";

const TotalPostsIcon = () => {
  const session = useDataStore((state) => state.session);

  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        fill={session?.user?.color ? session.user.color : "#FF77EF"}
      />
      <path
        d="M27.6466 13.2545C27.1694 12.7618 26.6015 12.3697 25.9749 12.1018C25.3482 11.8338 24.6756 11.6956 23.9959 11.6956C23.3162 11.6956 22.6436 11.8338 22.0169 12.1018C21.3903 12.3697 20.8224 12.7618 20.3452 13.2545C20.3212 13.2792 20.299 13.3057 20.2789 13.3337L19.9998 13.7213L19.7207 13.3337C19.7005 13.3056 19.6783 13.2791 19.6543 13.2543C18.69 12.2593 17.3773 11.696 16.0037 11.696C14.63 11.696 13.3173 12.2593 12.3531 13.2543C11.3895 14.2486 10.852 15.5925 10.852 16.9893C10.852 18.386 11.3895 19.7299 12.3531 20.7242L13.2088 21.6072L19.4895 28.0881C19.6234 28.2262 19.8075 28.3042 19.9998 28.3042C20.1921 28.3042 20.3762 28.2262 20.51 28.0881L26.7908 21.6072L27.6464 20.7243L27.1368 20.2302L27.6465 20.7242C28.1239 20.2318 28.5014 19.6484 28.7587 19.0078C29.0159 18.3673 29.148 17.6814 29.148 16.9893C29.148 16.2971 29.0159 15.6113 28.7587 14.9707C28.5015 14.3302 28.124 13.7468 27.6466 13.2545ZM27.6466 13.2545L27.1363 13.7488L27.6464 13.2542C27.6465 13.2543 27.6466 13.2544 27.6466 13.2545Z"
        fill="white"
        stroke="#0A0A0A"
        strokeWidth="1.42105"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="1" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
    </svg>
  );
};

export default TotalPostsIcon;
