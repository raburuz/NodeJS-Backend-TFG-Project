import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { databaseConnection } from '../database/config';

export class Server {
  private _app: Application;
  private _port: string;
  private apiRoutes: {
    userPath: string;
  };

  constructor() {
    this._app = express();
    this._port = process.env.PORT || '8000';
    //Paths from rutes
    this.apiRoutes = {
      userPath: '/api/auth/user',
    };

    //Database Connection
    this.connectDB();

    //Middlewares
    this.middlewares();

    //Rutes from App
    this.routes();
  }

  middlewares() {
    this._app.use(cors());

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
  }

  listen() {
    this._app.listen(this._port, () => {
      console.log('Listen port: ' + this._port);
    });
  }
}
