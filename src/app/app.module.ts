import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { CountriesPageComponent } from './countries-page/countries-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { CountryProfileComponent } from './country-profile/country-profile.component'
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component'
import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component'; // for FullCalendar!
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    CountriesPageComponent,
    CountryComponent,
    CountryProfileComponent,
    HomeComponent,
    CountriesContainerComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SigninComponent },
      { path: 'home', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'countries', children: [
          { path: '', component: CountriesContainerComponent },
          { path: 'all', component: CountriesPageComponent },
          { path: 'profile', component: CountryProfileComponent }
        ]
      },
    ]),
    TooltipModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
