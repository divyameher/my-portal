import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EmployeeCardComponent } from './shared/employee-card/employee-card.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EmployeeCardComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
