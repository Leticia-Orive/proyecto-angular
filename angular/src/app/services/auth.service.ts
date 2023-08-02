import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api'; // Cambia la URL por la del servidor backend
  private apiUrl = 'https://tu-servidor-backend.com/api'; // Reemplaza con la URL de tu servidor backend
  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`; // Ruta para el inicio de sesión en el servidor
    return this.http.post<any>(url, credentials).pipe(
      map((response) => {
        // Aquí puedes realizar cualquier procesamiento adicional de la respuesta del servidor antes de devolverla
        return response;
      })
    );
  }

  // Método para registrarse
  register(email: string, password: string, name: string): Observable<any> {
    // Tu lógica de registro aquí
    // Aquí realizas la solicitud POST al servidor para el registro
    const userData = { email, password, name }; // Datos del usuario a enviar al servidor
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`, {});
  }
}
