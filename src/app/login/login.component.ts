import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  successMessage: string = '';
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    const { email, password } = form.value;

    const storedEmail = sessionStorage.getItem('accountEmail');
    const storedPassword = sessionStorage.getItem('accountPassword');

    if ((email === storedEmail && password === storedPassword) || (email === "hr@tarkiz.info" && password === "tarkizinfo")) {
      this.successMessage = 'Login successful!';
      this.errorMessage = '';
    } else {
      this.successMessage = '';
      this.errorMessage = 'Invalid email or password.';
    }
  }

}
