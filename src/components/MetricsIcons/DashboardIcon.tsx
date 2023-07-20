import useDataStore from "@/store";
import React from "react";

const DashboardIcon = ({className}: {className: string}) => {
  const session = useDataStore((state) => state.session);

  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.5"
        y="1.11255"
        width="47"
        height="47"
        rx="23.5"
        fill={session?.user?.color ? session.user.color : "#FF77EF"}
      />
      <path
        d="M15 20.4125C15 18.7324 15 17.8923 15.327 17.2506C15.6146 16.6861 16.0735 16.2271 16.638 15.9395C17.2798 15.6125 18.1198 15.6125 19.8 15.6125H28.2C29.8802 15.6125 30.7202 15.6125 31.362 15.9395C31.9265 16.2271 32.3854 16.6861 32.673 17.2506C33 17.8923 33 18.7324 33 20.4125V28.8125C33 30.4927 33 31.3328 32.673 31.9745C32.3854 32.539 31.9265 32.9979 31.362 33.2856C30.7202 33.6125 29.8802 33.6125 28.2 33.6125H19.8C18.1198 33.6125 17.2798 33.6125 16.638 33.2856C16.0735 32.9979 15.6146 32.539 15.327 31.9745C15 31.3328 15 30.4927 15 28.8125V20.4125Z"
        fill="white"
      />
      <path d="M20 27.6125V29.6125V27.6125Z" fill="white" />
      <path d="M24 23.6125V29.6125V23.6125Z" fill="white" />
      <path d="M28 19.6125V29.6125V19.6125Z" fill="white" />
      <path
        d="M20 27.6125V29.6125M24 23.6125V29.6125M28 19.6125V29.6125M19.8 33.6125H28.2C29.8802 33.6125 30.7202 33.6125 31.362 33.2856C31.9265 32.9979 32.3854 32.539 32.673 31.9745C33 31.3328 33 30.4927 33 28.8125V20.4125C33 18.7324 33 17.8923 32.673 17.2506C32.3854 16.6861 31.9265 16.2271 31.362 15.9395C30.7202 15.6125 29.8802 15.6125 28.2 15.6125H19.8C18.1198 15.6125 17.2798 15.6125 16.638 15.9395C16.0735 16.2271 15.6146 16.6861 15.327 17.2506C15 17.8923 15 18.7324 15 20.4125V28.8125C15 30.4927 15 31.3328 15.327 31.9745C15.6146 32.539 16.0735 32.9979 16.638 33.2856C17.2798 33.6125 18.1198 33.6125 19.8 33.6125Z"
        stroke="#0A0A0A"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="0.5"
        y="1.11255"
        width="47"
        height="47"
        rx="23.5"
        stroke="black"
      />
    </svg>
  );
};

export default DashboardIcon;
