import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from "../../shared/http.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({


            name: '',
            email: '',
           contact: ''
          })
    };

    ngOnInit(): void {





       }
       onSubmit(form:NgForm) {
        console.log(form + 'submitted');
       }
      }
