import { Component, OnInit } from '@angular/core';

import { ContactusFormService } from  '../../shared/services/contactus-form.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ ContactusFormService ]
})
export class ContactUsComponent implements OnInit {
		
	private user: Object = {
		email: null,
		mail_subject: null,
		message: null
	}
	private formSubmitSuccess = true;
	private btnDisabled: boolean = false;
	public showContactForm:boolean = true;
	constructor(
		private contactService: ContactusFormService
	) { }

	ngOnInit() {
	}

	sendContactQuery(){
		if(this.fieldsCheck()){
			this.btnDisabled = true;
			this.contactService.submitContactForm(this.user);
			this.showContactForm = false;
			document.body.scrollTop = 0;
			return false;
		}
	}

	fieldsCheck(){
		for (let key in this.user) {
	        if (this.user.hasOwnProperty(key)) {
	            let value = this.user[key];
              	if (value === '' || value === null) {
                	return false;
              	}             
          	}
        }
        return true;
	}
}
