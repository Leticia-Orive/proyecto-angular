import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  register() {
    // Lógica para obtener los datos del formulario de registro (por ejemplo, nombre, email y contraseña)
    const userData = {
      name: 'John Doe',
      email: 'user@example.com',
      password: 'secretpassword',
    };

    // Llamar al método register del servicio AuthService
    this.authService.register(userData).subscribe(
      (response) => {
        // Procesar la respuesta del servidor si el registro es exitoso
        console.log('Registro exitoso', response);
      },
      (error) => {
        // Manejar el error si el registro falla
        console.error('Error en el registro', error);
      }
    );
  }
}
