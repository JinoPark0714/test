"use strict"
import express from 'express';
import { init } from './loader/index.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  const app = express();
  await init(app);

  app.listen(PORT, (error) => {
    if(error) {
      console.log(error);
      return;
    }

    console.log('server Start');
  });
}

startServer();
