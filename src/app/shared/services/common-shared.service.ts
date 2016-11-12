import { Injectable } from '@angular/core';

@Injectable()
export class CommonSharedService {

  constructor() { }

  deviceType(){
  	if(window.innerWidth < 768){
		return "Mobile";
	}
	return "Web";
  }
}
