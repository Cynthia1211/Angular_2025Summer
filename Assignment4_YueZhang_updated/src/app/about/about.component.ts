import { Component } from '@angular/core';
import { JsonGetService } from '../services/json-get.service';
import { PersonalProfile } from '../classes/personal-profile';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [JsonGetService]
})
export class AboutComponent {

  constructor(private aboutMe: JsonGetService){}

  jsonData:any
  url = '/data/portfolioData.json'
  myAbout:PersonalProfile = new PersonalProfile()

  ngOnInit() { 
    this.aboutMe.getDataFromUrl(this.url).subscribe((data:any) => {
      this.jsonData = data;
      this.myAbout = this.jsonData.about
    });
  }

}
