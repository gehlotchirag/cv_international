import { Router, Request, Response } from 'express';
import { provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {
  REQUEST_URL,
  NODE_LOCATION_PROVIDERS,
  ORIGIN_URL,
  selectorResolver,
  selectorRegExpFactory,
  renderToStringWithPreboot,
  Bootloader
} from 'angular2-universal';
