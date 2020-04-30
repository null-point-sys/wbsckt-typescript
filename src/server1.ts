import express from 'express';
import http from 'http';



export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;

    private httpServer: http.Server;


    private constructor() {

        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );

        this.escucharSockets();
    }

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    }

    }


    start( callback: Function ) {

        this.httpServer.listen( this.port, callback );

    }

}
