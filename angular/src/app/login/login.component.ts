import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) {}
  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(credentials).subscribe(
      (response) => {
        // Manejar la respuesta del servidor en caso de éxito
        console.log('Inicio de sesión exitoso', response);
      },
      (error) => {
        // Manejar errores en caso de fallo en el inicio de sesión
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
