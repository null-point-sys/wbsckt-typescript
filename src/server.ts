import * as express from "express";
import router from './router';
//import bodyParser from 'body-parser';
//import cors from 'cors';

import log from "./log";

const app = express();

// BodyParser
//app.use( bodyParser.urlencoded({ extended: true }) );
//app.use( bodyParser.json() );

// CORS
//app.use( cors({ origin: true, credentials: true  }) );


// Rutas de servicios
server.app.use('/', router );

app.get("/", (req, res) => {
    res.json(JSON.stringify({ok: 1})).end();
});

app.listen(process.env.PORT || 5000, () => {
    log.info("app running");
});
