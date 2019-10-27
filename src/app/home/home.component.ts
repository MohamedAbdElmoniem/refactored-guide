import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public MyCountriesService: CountriesServiceService) { }

  ngOnInit() {
    this.MyCountriesService.GetUserData().subscribe((response)=>{
      debugger
    })
  }

}
