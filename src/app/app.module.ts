import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CarouselCoursesComponent } from './carousel-courses/carousel-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesListComponent,
    CarouselCoursesComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  exports: [
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
