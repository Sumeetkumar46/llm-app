import { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { ChunkList } from '../components/ChunkList';

const Home = () => {
  const [documentId, setDocumentId] = useState<string | null>(null);

  return (
    <div>
      <h1 className="title">Document Chunker</h1>
      <FileUpload onSuccess={setDocumentId} />
      {documentId && <ChunkList documentId={documentId} />}
    </div>
  );
};

export default Home;