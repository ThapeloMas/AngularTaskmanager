
// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (response) => {
          // Store the JWT token
          this.authService.setToken(response.token);
          // Navigate to todolist
          this.router.navigate(['/todolist']);
        },
        error: (error) => {
          // Handle login error
          this.errorMessage = 'Invalid email or password';
          console.error('Login error', error);
        }
      });
  }
}