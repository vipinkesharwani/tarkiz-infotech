import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  successMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    const { email, password } = form.value;

    // Save the account details (simple example, no real storage)
    if (email && password) {
      // Ideally, you should store this in a database or service
      sessionStorage.setItem('accountEmail', email);
      sessionStorage.setItem('accountPassword', password);
      this.successMessage = 'Account created successfully!';
      setTimeout(() => this.router.navigate(['/sign-in']), 2000); // Navigate to login after 2 seconds
    }
  }

}
