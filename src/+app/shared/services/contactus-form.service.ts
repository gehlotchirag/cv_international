import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';

import { HttpClientService } from './http-client.service';

@Injectable()
export class ContactusFormService {
  private formSubmitUrl = 'api/contactus';

  constructor(private httpClient: HttpClientService){}

  submitContactForm(formDetails: Object){
    let body = formDetails;

    let formStream =  this.httpClient
                          .post(this.formSubmitUrl, body);

    formStream.map((r: Response) => { return r.json() }).pluck('d')
              .subscribe(
                (data: any) => { console.log("success")},
                (error) => console.error(error),
                () => {}
              );
    return formStream;
  }
}
