import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { sequelize } from './db';
import documentRoutes from './routes/documentRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use('/api/documents', documentRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})