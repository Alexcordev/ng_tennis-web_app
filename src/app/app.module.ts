import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { AtelierCardComponent } from './components/atelier-card/atelier-card.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    FavoriteCardComponent,
    AtelierCardComponent,
    WorkshopComponent,
    CoursesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDropdownModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [NgbDropdownModule, NgbCollapseModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
