import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { JsonGetService } from '../services/json-get.service';
import { SocialMedias } from '../classes/social-medias';
import { PersonalProfile } from '../classes/personal-profile';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [JsonGetService]
})
export class HeaderComponent {

  constructor(private header: JsonGetService){}
    
      jsonData:any
      url = '/data/portfolioData.json'
      mySocialMedias:SocialMedias[] = [];
      myDetails: PersonalProfile = new PersonalProfile();
    
      ngOnInit() { 
        this.header.getDataFromUrl(this.url).subscribe((data:any) => {
          this.jsonData = data;
          this.mySocialMedias = this.jsonData.socialMedias;
          this.myDetails = this.jsonData.about;
        });
      }
  
}
