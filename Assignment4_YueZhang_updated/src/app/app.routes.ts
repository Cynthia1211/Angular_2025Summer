import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "home", component: ProjectsComponent},
    {path: "", redirectTo: '/home', pathMatch: 'full'}
];
