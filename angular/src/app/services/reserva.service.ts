// reserva.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private apiUrl = 'URL_DEL_BACKEND'; // Reemplaza 'URL_DEL_BACKEND' con la URL de tu backend

  constructor(private http: HttpClient) {}

  // Método para obtener todas las reservas
  obtenerReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  // Método para agregar una reserva
  agregarReserva(reserva: Reserva): Observable<any> {
    return this.http.post(this.apiUrl, reserva);
  }

  // Método para editar una reserva
  editarReserva(reserva: Reserva): Observable<any> {
    return this.http.put(`${this.apiUrl}/${reserva.id}`, reserva);
  }

  // Método para eliminar una reserva
  borrarReserva(reserva: Reserva): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${reserva.id}`);
  }
}
