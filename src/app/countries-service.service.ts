import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  public selectedCountry: any = {}

  constructor(public MyHttpClient: HttpClient) { }

  getCountries() {
    return this.MyHttpClient.get('https://restcountries.eu/rest/v2/all')
  }
  UserSignUp(data) {
    return this.MyHttpClient.post('http://localhost:8085/signup', data, {})
  }

  UserSignIn(data) {
    return this.MyHttpClient.post('http://localhost:8085/signin', data, { observe: 'response', withCredentials: true })
  }

  GetUserData() {
    return this.MyHttpClient.get('http://localhost:8085/getuserdata', { withCredentials: true, observe: 'response' })
  }

}
