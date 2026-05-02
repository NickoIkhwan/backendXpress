import express, {Request, Response} from 'express';
import { logger } from './middlewares/logger';
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use(logger);

app.use(`/api`,userRoutes);

app.get('/',(req : Request, res : Response) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('server berjalan pada port 3000');
});