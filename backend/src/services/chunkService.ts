import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Chunk } from '../models/chunk';

export async function chunkAndSave(content: string, documentId: string, chunkSize = 500, overlap = 100) {
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize, chunkOverlap: overlap });
  const docs = await splitter.createDocuments([content]);

  const chunks = docs.map((d, i) => ({
    content: d.pageContent,
    index: i,
    documentId,
    metadata: d.metadata,
  }));

  await Chunk.bulkCreate(chunks);
}