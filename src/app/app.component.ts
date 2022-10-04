import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  
  firstname: string = "Akshay";
  lastname: string = "Kumbhare";
  age: number = 27;
  receivenewsletters: boolean = true;
  gender: string = "Male";
  country: string = "India";
  address: string = "http://www.facebook.com";

  ChangeDate() {
    this.firstname = "Black";
    this.lastname = "Adam";
    this.age = 21;
    this.receivenewsletters = true;
    this.gender = "Male";
    this.country = "India";
    this.address = "http://www.youtube.com";
  }
}
