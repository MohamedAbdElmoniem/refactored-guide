import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from "../countries-service.service"
@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {

  countriesData = []
  countriesDataOriginal = []
  country = ""

  constructor(public MyCountriesService: CountriesServiceService) { }

  ngOnInit() {
    this.MyCountriesService.getCountries().subscribe((response: any) => {
      this.countriesData = response
      this.countriesDataOriginal = response
    })
  }

  handleSearchForCountry(value) {
    this.countriesData = this.countriesDataOriginal
    .filter((val) => val.name.toLowerCase().includes(value.toLowerCase()))
  }



}
