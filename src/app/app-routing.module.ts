import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { WorkshopComponent } from './components/workshop/workshop.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
   {path: 'workshops',  component: WorkshopComponent},
   {path: 'contact',  component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
