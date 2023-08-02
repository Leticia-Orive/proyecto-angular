import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) {}
  onSubmit() {
    // Llamar al método de registro del servicio de autenticación
    this.authService.register(this.email, this.password, this.name).subscribe(
      (response) => {
        // Manejar la respuesta del servidor después del registro exitoso
        console.log('Registro exitoso:', response);
      },
      (error) => {
        // Manejar errores en caso de fallo en el registro
        console.error('Error en el registro:', error);
      }
    );
  }
  register() {
    // Lógica para obtener los datos del formulario de registro (por ejemplo, nombre, email y contraseña)
    const userData = {
      name: 'John Doe',
      email: 'user@example.com',
      password: 'secretpassword',
    };

    // Llamar al método register del servicio AuthService
    this.authService.register(this.email, this.password, this.name).subscribe(
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
