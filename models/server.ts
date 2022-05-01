import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { databaseConnection } from '../database/config';
import { corsConfig } from '../helpers';

const BlockClassJS = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@BlockClassJS
export class Server {
  private _app: Application;
  private _port: number;

  private apiRoutes: {
    userPath: string;
    websitePath: string;
  };

  constructor() {
    this._app = express();

    this._port = (process.env.PORT as number) ?? 8000;
    //Paths from rutes
    this.apiRoutes = {
      userPath: '/api/auth/user',
      websitePath: '/api/website',
    };

    //Database Connection
    this.connectDB();

    //Middlewares
    this.middlewares();

    //Rutes from App
    this.routes();
  }

  middlewares() {
    //Secure  Express
    this._app.use(helmet());

    //cors
    this._app.use(cors(corsConfig));

    //read json.body
    this._app.use(express.json());

    //Public
    this._app.use(express.static('public'));

    //Parse to string body content
    this._app.use(bodyParser.text());
  }

  async connectDB() {
    await databaseConnection();
  }
  //Rutes from App
  routes() {
    this._app.use(
      this.apiRoutes.userPath,
      require('../routes/user.api.routes')
    );
    this._app.use(
      this.apiRoutes.websitePath,
      require('../routes/website.api.routes')
    );
  }

  listen() {
    this._app.listen(this._port, () => {
      console.log('Listen port: ' + this._port);
    });
  }
}
