import { useState } from "react";
import axios from "axios";

interface FileUploadProps {
  onSuccess: (documentId: string) => void;
}

export const FileUpload = ({ onSuccess }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [chunkSize, setChunkSize] = useState(500);
  const [overlap, setOverlap] = useState(100);

  const handleUpload = async () => {
    if (!file) return;

    const allowedTypes = ["application/pdf", "text/plain"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF or TXT files are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("chunkSize", chunkSize.toString());
    formData.append("overlap", overlap.toString());

    try {
      const res = await axios.post(
        "http://localhost:5000/api/documents/upload",
        formData
      );
      alert("Upload successful! Document ID: " + res.data.documentId);
      onSuccess(res.data.documentId);
    } catch (err) {
      console.log(err);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className='upload-box'>
      <label>
        Select File
        <input
          type='file'
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </label>
      <label>
        Chunks Size
        <input
          type='number'
          value={chunkSize}
          onChange={(e) => setChunkSize(Number(e.target.value))}
        />
      </label>
      <label>
        Chunk Overlap
        <input
          type='number'
          value={overlap}
          onChange={(e) => setOverlap(Number(e.target.value))}
        />
      </label>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};