import express from 'express';
import cors from 'cors';
import route from './src/Router/index.js';
const app = express()


app.use(cors());
app.use(express.json());
app.use('/', route)
app.listen(8000, () => console.log('engine start'));