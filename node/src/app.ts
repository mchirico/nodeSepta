import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getS$ } from './septa/septa';

export const getApp = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.get('/api/v1/test', (_, res) => {
    res.json({ ok: true });
  });

  app.get('/', (_, res) => {
    getS$.subscribe(x => res.json(x));
  });
  return app;
};
