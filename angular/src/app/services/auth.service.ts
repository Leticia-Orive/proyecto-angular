import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api'; // Cambia la URL por la del servidor backend

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`; // Ruta para el inicio de sesión en el servidor
    return this.http.post<any>(url, credentials);
  }

  // Método para registrarse
  register(userData: any): Observable<any> {
    const url = `${this.baseUrl}/register`; // Ruta para el registro en el servidor
    return this.http.post<any>(url, userData);
  }
  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`, {});
  }
}
