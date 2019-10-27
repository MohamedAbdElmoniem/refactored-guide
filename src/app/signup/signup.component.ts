import { CountriesServiceService } from './../countries-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

const SUCCESS = 'success'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = ''
  password = ''
  age = ''

  constructor(public MyCountriesService: CountriesServiceService,
    public MyRouter: Router) { }

  ngOnInit() {
  }

  handleSubmit() {
    const { username, password, age } = this
    if (username && password && age) {
      this.MyCountriesService.UserSignUp({
        username,
        password,
        age
      }).subscribe((response: any) => {
        if (response.message === SUCCESS) {
          this.MyRouter.navigate(['signin'])
        } else {
          alert('error')
        }
      })
    }else{
      alert('law sm7t da5al bayanatak w mtwg3sh alby')
    }
  }

}
