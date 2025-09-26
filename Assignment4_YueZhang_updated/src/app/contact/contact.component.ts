import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '../modules/material-ui.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JsonGetService } from '../services/json-get.service';
import { ContactInfo } from '../classes/contact-info';



@Component({
  selector: 'app-contact',
  imports: [ FormsModule, MaterialModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [JsonGetService]
})
export class ContactComponent {

  constructor(private contactInfo: JsonGetService){}
  
    jsonData:any
    url = '/data/portfolioData.json'
    myContactInfo:ContactInfo[] = [];
  
    ngOnInit() { 
      this.contactInfo.getDataFromUrl(this.url).subscribe((data:any) => {
        this.jsonData = data;
        this.myContactInfo = this.jsonData.contact
      });
    }

  onSubmit(form: NgForm) {
    alert('Thank you for your comment');
    form.resetForm();
  }

}
