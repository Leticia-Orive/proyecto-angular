import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    // Lógica para obtener los datos del formulario de inicio de sesión (por ejemplo, email y contraseña)
    const credentials = {
      email: 'user@example.com',
      password: 'secretpassword',
    };

    // Llamar al método login del servicio AuthService
    this.authService.login(credentials).subscribe(
      (response) => {
        // Procesar la respuesta del servidor si el inicio de sesión es exitoso
        console.log('Inicio de sesión exitoso', response);
      },
      (error) => {
        // Manejar el error si el inicio de sesión falla
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
