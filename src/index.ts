import 'reflect-metadata';
import * as express from 'express';
import bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { createConnection } from 'typeorm';

import container from './inversify.config';

import './controllers';

const server = new InversifyExpressServer(container);

export const appPromise = (async (): Promise<express.Application> => {
  await createConnection();

  return server
    .setConfig((app: express.Application) => {
      app.use(bodyParser.urlencoded(
        {
          extended: false,
        },
      ));
      app.use(bodyParser.json());
    })
    .setErrorConfig((app: express.Application) => {
      app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.error(err.stack);
        res.status(500).json(err);
      });
    })
    .build();
});
