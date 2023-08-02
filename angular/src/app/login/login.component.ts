import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      (response) => {
        // Usuario autenticado correctamente
        console.log('Usuario autenticado:', response);
      },
      (error) => {
        // Error en la autenticación
        console.error('Error en la autenticación:', error);
      }
    );
  }
}
