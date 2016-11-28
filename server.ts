// These polyfills must be the first thing imported in node

import 'ts-helpers';
import './__workaround.node'; // temporary until 2.1.1 things are patched in Core

import 'angular2-universal/polyfills';
import * as path from 'path';
import * as express from 'express';

// Angular 2 Universal
import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {
  expressEngine,
  BASE_URL,
  REQUEST_URL,
  ORIGIN_URL,
  NODE_LOCATION_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

// replace this line with your Angular 2 root component
import {AppModule, routing} from './app';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config: ExpressEngineConfig = {
    directives: [ AppModule ],

    // dependencies shared among all requests to server
    platformProviders: [
      {provide: ORIGIN_URL, useValue: 'http://localhost:8001'},
      {provide: BASE_URL, useValue: baseUrl},
    ],

    // dependencies re-created for each request
    providers: [
      {provide: REQUEST_URL, useValue: url},
      provideRouter(routing),
      NODE_LOCATION_PROVIDERS,
      NODE_HTTP_PROVIDERS,
    ],

    // if true, server will wait for all async to resolve before returning response
    async: true,

    // if you want preboot, you need to set selector for the app root
    // you can also include various preboot options here (explained in separate document)
    preboot: false // { appRoot: 'app' }
  };

  res.render('index', config);
}

// Serve static files
app.use(express.static(ROOT, {index: false}));

// send all requests to Angular Universal
// if you want Express to handle certain routes (ex. for an API) make sure you adjust this
app.get('/', ngApp);
app.get('/home', ngApp);
app.get('/about', ngApp);

// Server
app.listen(8001, () => {
  console.log('Listening on: http://localhost:8001');
});