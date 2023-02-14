import 'dotenv/config';

import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log(`Escuchando el puerto 3000`);
});

