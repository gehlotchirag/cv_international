import { Component } from '@angular/core';
import { HttpClientService } from './shared/services/http-client.service';


@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpClientService ]
})
export class AppComponent {}
