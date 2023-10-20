import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import { AppDataSource } from './data-source';
import router from './route';
import dotenv = require("dotenv")

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = process.env.PORT as string;

    var cors = require('cors');
    // console.log(req)

    app.use(cors());

    app.use(express.json());
    app.use('/api/v1', router);

    app.get('/', (reg: Request, res: Response) => {
      res.send('hello world!');
    });

    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
