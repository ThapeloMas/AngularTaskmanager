import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Basic validation (add actual authentication logic here)
    if (this.email && this.password) {
      this.router.navigate(['/todolist']);
    } else {
      alert('Please enter valid email and password');
    }
  }
}
