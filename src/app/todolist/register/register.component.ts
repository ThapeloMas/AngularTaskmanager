// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onRegister() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    this.authService.register(this.email, this.password)
      .subscribe({
        next: (response) => {
          // Registration successful, navigate to login or directly log in
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Handle registration error
          this.errorMessage = error.error?.message || 'Registration failed';
          console.error('Registration error', error);
        }
      });
  }
}