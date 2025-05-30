import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export interface DocumentAttributes {
  id?: string;
  name: string;
}

export interface DocumentInstance extends Model<DocumentAttributes>, DocumentAttributes {}

export const Document = sequelize.define<DocumentInstance>('Document', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
