import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Basic validation
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
    } else if (this.email && this.password) {
      alert('Registration successful!');
      this.router.navigate(['/todolist']);
    } else {
      alert('Please fill all fields');
    }
  }
}
