import dotenv from 'dotenv';
import { Server } from './models';

dotenv.config({ debug: true });

const server = new Server();

server.listen();
