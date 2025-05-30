import { useEffect, useState } from 'react';
import axios from 'axios';

interface Chunk {
  index: number;
  content: string;
}

export const ChunkList = ({ documentId }: { documentId: string }) => {
  const [chunks, setChunks] = useState<Chunk[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/documents/${documentId}/chunks`).then((res) => setChunks(res.data));
  }, [documentId]);

  return (
    <div className="chunk-list">
      {chunks.map((chunk) => (
        <div key={chunk.index} className="chunk">
          <h4>Chunk {chunk.index}</h4>
          <pre>{chunk.content}</pre>
        </div>
      ))}
    </div>
  );
};