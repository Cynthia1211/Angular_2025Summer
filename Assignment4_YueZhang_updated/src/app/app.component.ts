import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './modules/material-ui.module';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterLinkActive} from'@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, CommonModule, FormsModule,
    HeaderComponent, FooterComponent, AboutComponent, ProjectsComponent, 
    ContactComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment2_YueZhang';

  darkMode = false;

}
