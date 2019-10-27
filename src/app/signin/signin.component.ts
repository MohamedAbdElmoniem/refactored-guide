import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username = ''
  password = ''

  constructor(public MyCountriesService: CountriesServiceService,
    public MyRouter: Router) { }

  ngOnInit() {
  }

  handleSubmit() {
    const { username, password } = this
    if (username && password) {
      this.MyCountriesService.UserSignIn({
        username,
        password
      }).subscribe((response: any) => {
        if (response.body.message === 'success') {
          this.MyRouter.navigate(['home'])
        } else {
          alert('error')
        }
      })
    } else {
      alert('law sm7t da5al bayanatak w mtwg3sh alby')
    }
  }

}
