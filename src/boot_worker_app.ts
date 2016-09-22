import './polyfills';

import { bootstrapWorkerApp } from '@angular/platform-webworker';
import { AppComponent } from './app/app.component';

bootstrapWorkerApp(AppComponent, []);
