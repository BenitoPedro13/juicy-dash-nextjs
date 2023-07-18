import useDataStore from "@/store";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const FileUploadButton = () => {
  const fetchAttachment = useDataStore((store) => store.fetchAttachment);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    fetch("https://benitopedro.tech/attachments/", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const res = await response.json();
        await fetchAttachment();
      })
      .catch((error) => {
        console.log("upload error:", error);
      });
  };

  return (
    <div>
      <div
        onClick={handleButtonClick}
        className="btn btn-ghost box-border flex-shrink-0 w-min h-auto flex justify-center items-center py-[10px] px-[8px] shadow-cost-per-metrics bg-white overflow-hidden self-stretch relative content-center flex-nowrap gap-2 rounded-lg border border-solid border-[#cfd4dc]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.25}
          stroke="#2d3442"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUploadButton;
