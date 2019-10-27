import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountriesServiceService } from '../countries-service.service';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-country-profile',
  templateUrl: './country-profile.component.html',
  styleUrls: ['./country-profile.component.css']
})
export class CountryProfileComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!
  selectedCountry: any = {}
  public currentDate = new Date('10-10-2002')
  constructor(public MyActivatedRoute: ActivatedRoute, public MyCountriesService: CountriesServiceService) {

  }

  ngOnInit() {
    this.selectedCountry = this.MyCountriesService.selectedCountry

  }

}
