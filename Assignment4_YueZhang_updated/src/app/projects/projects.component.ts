import { Component } from '@angular/core';
import {MaterialModule} from '../modules/material-ui.module';
import {LikebuttonsService} from '../services/likebuttons.service';
import { FormsModule } from '@angular/forms';
import { JsonGetService } from '../services/json-get.service';
import { Projects } from '../classes/projects';

@Component({
  selector: 'app-projects',
  imports: [MaterialModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [LikebuttonsService, JsonGetService]

})
export class ProjectsComponent {

  constructor(private likeService: LikebuttonsService, 
              private projectService: JsonGetService){}
  
  like(elem: any) { 
      this.likeService.likeCard(elem); 
  }

  jsonData:any
        url = '/data/portfolioData.json'
        myProjects:Projects[] = [];
      
        ngOnInit() { 
          this.projectService.getDataFromUrl(this.url).subscribe((data:any) => {
            this.jsonData = data;
            this.myProjects = this.jsonData.projects;
          });
        }
  
  filterData: string = '';

}
