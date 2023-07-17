import useDataStore from "@/store";
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
        console.log("upload response:", res);
        await fetchAttachment()
      })
      .catch((error) => {
        console.log("upload error:", error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Upload File</button>
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
