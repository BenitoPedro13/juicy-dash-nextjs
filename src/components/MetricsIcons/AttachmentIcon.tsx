import useDataStore from "@/store";
import React from "react";

const AttachmentIcon = ({ className }: { className?: string }) => {
  const session = useDataStore((state) => state.session);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        fill={session?.user?.color ? session.user.color : "#FF77EF"}
      />
      <path
        d="M22.2512 10.7937C22.2288 10.7713 22.2022 10.7536 22.173 10.7416C22.1438 10.7295 22.1124 10.7232 22.0807 10.7233L22.0803 10.7233L13.1873 10.7233C12.9268 10.7233 12.6769 10.8267 12.4928 11.0109C12.3086 11.1951 12.2051 11.445 12.2051 11.7054V28.0094C12.2051 28.2699 12.3086 28.5197 12.4928 28.7039C12.6769 28.8881 12.9268 28.9916 13.1873 28.9916H26.5269C26.7873 28.9916 27.0372 28.8881 27.2214 28.7039C27.4056 28.5197 27.509 28.2699 27.509 28.0094V16.152V16.1516C27.5091 16.1199 27.5028 16.0885 27.4907 16.0593C27.4787 16.0301 27.461 16.0036 27.4387 15.9812L22.2512 10.7937ZM22.2512 10.7937C22.2512 10.7937 22.2512 10.7937 22.2513 10.7938L27.4385 15.981L22.2512 10.7937ZM21.5803 16.152V16.652H22.0803H26.1563H27.3634L26.5099 15.7984L22.4339 11.7224L21.5803 10.8689V12.076V16.152Z"
        fill="white"
        stroke="black"
      />
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
    </svg>
  );
};

export default AttachmentIcon;
