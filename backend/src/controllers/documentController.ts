import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { Document } from "../models/document";
import { Chunk } from "../models/chunk";
import { chunkAndSave } from "../services/chunkService";
import pdfParse from "pdf-parse";

interface CustomRequest extends Request {
  files?: {
    file?: UploadedFile;
  };
}

export const uploadDocument = async (req: CustomRequest, res: Response) => {
  try {
    const { chunkSize, overlap } = req.body;
    const file = req.files?.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    //const text = file.data.toString('utf-8');
    let text = "";
    if (file.mimetype === "application/pdf") {
      const pdfData = await pdfParse(file.data);
      text = pdfData.text;
    } else if (file.mimetype === "text/plain") {
      text = file.data.toString("utf-8");
    } else {
      return res.status(400).json({
        error: "Unsupported file type. Only PDF and TXT are allowed.",
      });
    }
    const doc = await Document.create({ name: file.name });

    await chunkAndSave(text, doc.id!, parseInt(chunkSize), parseInt(overlap));

    res.status(200).json({
      message: "Document uploaded and chunked successfully",
      documentId: doc.id,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Internal server error during upload" });
  }
};

export const getChunks = async (req: Request, res: Response) => {
  try {
    const { documentId } = req.params;
    const chunks = await Chunk.findAll({
      where: { documentId },
      order: [["index", "ASC"]],
    });
    res.status(200).json(chunks);
  } catch (error) {
    console.error("Fetch Chunks Error:", error);
    res.status(500).json({ error: "Failed to retrieve document chunks" });
  }
};
