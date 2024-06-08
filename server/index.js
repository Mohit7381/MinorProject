
import express from 'express';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import connectDB from './Config/db.js';
import { notFound,errorHandler } from './middleware/ErrorHandler.js';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { LlamaModel, LlamaContext, LlamaChatSession} from 'node-llama-cpp'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const model =new LlamaModel(__dirname,"models","nnotus-7b-v1.Q4_K_M.gguf")
const context = new LlamaContext(model)
const session = new LlamaChatSession(context)

const app = express();
const serve=createServer(app);
const io = new Server(serve);
// connectDB();
dotenv.config();
app.use(errorHandler)
app.use(notFound)
app.use(express.urlencoded({extended:true}));

app.get('/',()=>{
    console.log('Hello World');
})
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
    console.log('user disconnected');
    });
})
const Port=process.env.PORT || 8080;
io.listen(Port, () => {console.log(`Server is running on port ${Port}`)});

