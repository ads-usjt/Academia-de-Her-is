import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CarouselCoursesComponent } from './carousel-courses/carousel-courses.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
