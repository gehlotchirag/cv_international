import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import TestimonialItem from '../../interfaces/testimonial-item';

@Component({
  selector: 'cvi-testimonials-widget',
  templateUrl: './testimonials-widget.component.html',
  styleUrls: ['./testimonials-widget.component.css']
})
export class TestimonialsWidgetComponent implements OnInit {
  public dataItems: TestimonialItem[];
  public header: string;

  constructor(public httpClient: HttpClientService){
  }

  ngOnInit() {
  }

}
