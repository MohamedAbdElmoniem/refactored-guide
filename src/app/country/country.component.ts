import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { CountriesServiceService } from '../countries-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() countryDetails: ICountryDetails = {
    name: '',
    capital: '',
    flag: '',
    nativeName: ''
  }
  constructor(public MyRouter: Router, public MyCountriesService: CountriesServiceService) { }

  ngOnInit() {
  }

  handleProfileNavigation() {
    this.MyCountriesService.selectedCountry = this.countryDetails
    // this.MyRouter.navigate(['/countries/profile', this.countryDetails],{skipLocationChange:true})
    this.MyRouter.navigate(['/countries/profile'])
  }

}


interface ICountryDetails {
  name: string;
  flag: string;
  nativeName: string;
  capital: string;
}
