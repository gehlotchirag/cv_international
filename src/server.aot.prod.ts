// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.node'; // temporary until 2.1.1 things are patched in Core

import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as mcache from 'memory-cache';

const { gzipSync } = require('zlib');
const accepts = require('accepts');
const { compressSync } = require('iltorb');
const interceptor = require('express-interceptor');
const request = require('request');
let view_dir = '';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

// App
import { MainModuleNgFactory } from './node.module.ngfactory';

// Routes
import { routes } from './server.routes';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', createEngine({
  precompile: false, // this needs to be false when using ngFactory
  ngModule: MainModuleNgFactory,
  providers: [
    // use only if you have shared state between users
    // { provide: 'LRU', useFactory: () => new LRU(10) }

    // stateless providers only since it's shared
  ]
}));
app.set('port', process.env.PORT || 8001);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

app.use(interceptor((req, res)=>({
  // don't compress responses with this request header 
  isInterceptable: () => (!req.headers['x-no-compression']),
  intercept: ( body, send ) => {
    const encodings  = new Set(accepts(req).encodings());
    const bodyBuffer = new Buffer(body);
    // url specific key for response cache
    const key = '__response__' + req.originalUrl || req.url;
    let output = bodyBuffer;
    // check if cache exists
    if (mcache.get(key) === null) {
      // check for encoding support
      if (encodings.has('br')) {
        // brotli
        res.setHeader('Content-Encoding', 'br');
        output = compressSync(bodyBuffer);
        mcache.put(key, {output, encoding: 'br'});
      } else if (encodings.has('gzip')) {
        // gzip
        res.setHeader('Content-Encoding', 'gzip');
        output = gzipSync(bodyBuffer);
        mcache.put(key, {output, encoding: 'gzip'});
      }
    } else {
      const { output, encoding } = mcache.get(key);
      res.setHeader('Content-Encoding', encoding);
      send(output);
    }
    send(output);
  }
})));

const accessLogStream = fs.createWriteStream(ROOT + '/morgan.log', {flags: 'a'})

app.use(morgan('common', {
  skip: (req, res) => res.statusCode < 400,
  stream: accessLogStream
}));

function cacheControl(req, res, next) {
  // instruct browser to revalidate in 60 seconds
  res.header('Cache-Control', 'max-age=60');
  next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), {index: false}));

//
/////////////////////////
// ** Example API
// Notice API should be in aseparate process
import { serverApi, createTodoApi } from './backend/api';
// Our API for demos only
app.get('/data.json', serverApi);
app.use('/api', createTodoApi());

function ngApp(req, res) {
  let options = {}
  let base_url = 'http://international.craftsvilla.com:8000/api/front_end';
  let org_url = req.originalUrl.split('?')[0];
  let url = '';
  if(org_url === '/us/') {
    url = base_url + '/home';
    view_dir = path.join(__dirname, '/static/home');
  }else if(org_url.indexOf('/shop/') > -1) {
    let url_arr = (org_url.split('/')).filter((item) => item !== "");
    url = base_url + '/shop/' + url_arr[url_arr.length - 1];
    view_dir = path.join(__dirname, '/static/shop/', url_arr[url_arr.length - 1]);
  }else{
    let url_arr = org_url.split('/us/');
    let temp_url = ((url_arr[url_arr.length - 1]).split('/')).filter((item) => item !== "").join('/');
    url = base_url + '/' + temp_url;
    view_dir = path.join(__dirname, '/static/', temp_url);
  }
  request.get(url, options,function(err,response,body){
    if(err) {
      res.redirect('/us/');
    }
    if(response.statusCode === 200 ){
      renderDynamicHtml(req, res);
    }else{
      res.redirect('/us/');
    }
  });
}

function renderDynamicHtml(req, res) {
  app.set('views', view_dir);
  res.render('index', {
    req,
    res,
    // time: true, // use this to determine what part of your app is slow only in development
    preboot: false,
    baseUrl: '/us/',
    requestUrl: req.originalUrl,
    originUrl: `http://localhost:${ app.get('port') }`
  }, function(err, html) {
    if(err) {
      res.redirect('/us/');
    } else {
      res.send(html);
    }
  });
  // body...
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp); 
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/*`, ngApp);
});
app.get('*', ngApp);

// Server
let server = app.listen(app.get('port'), () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
