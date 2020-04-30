import * as express from "express";
import router from './router';
import * as bodyParser from 'body-parser'; // * as -> important! to prevent heroku deploy errors
import * as cors from 'cors';              // * as -> important! to prevent heroku deploy errors

import log from "./log";

const app = express();

// BodyParser
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

// CORS
app.use( cors({ origin: true, credentials: true  }) );


// Rutas de servicios
app.use('/', router );

app.get("/", (req, res) => {
    res.json(JSON.stringify({ok: 1})).end();
});

app.listen(process.env.PORT || 5000, () => {
    log.info("app running");
});
