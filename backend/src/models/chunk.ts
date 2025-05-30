import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Document } from "./document";

export const Chunk = sequelize.define("Chunk", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  content: DataTypes.TEXT,
  index: DataTypes.INTEGER,
  metadata: DataTypes.JSON,
});

Chunk.belongsTo(Document, { foreignKey: "documentId" });
Document.hasMany(Chunk, { foreignKey: "documentId" });
