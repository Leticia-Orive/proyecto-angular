import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/peliculas';
import { PeliculasService } from '../services/peliculas.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  private apiUrl = 'URL_DEL_BACKEND'; // Reemplaza 'URL_DEL_BACKEND' con la URL de tu backend

  // Propiedades para el formulario
  pelicula: Pelicula = new Pelicula();
  isEditing: boolean = false;
  peliculas: never[];

  // Otras propiedades y métodos para la lista de películas, etc.

  constructor(
    private peliculaService: PeliculasService,
    private http: HttpClient
  ) {
    // Inicializar la lista de películas con algunos datos de ejemplo
    this.peliculas = [
      // Películas de ejemplo...
    ];
  }
  // Obtener todas las películas
  getPeliculas(): Observable<Pelicula[]> {
    return of(this.peliculas);
  }

  ngOnInit() {
    // Lógica para obtener la lista de películas
  }

  // Método para agregar una película
  agregarPelicula(pelicula: Pelicula): Observable<void> {
    // Asegúrate de que el método 'post' devuelva un 'Observable<void>'
    return this.http.post<void>(this.apiUrl, pelicula);
  }

  // Método para editar una película
  editarPelicula(pelicula: Pelicula): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${pelicula.id}`, pelicula);
  }

  // Método para cargar los datos de una película en el formulario para editar
  cargarPeliculaParaEditar(pelicula: Pelicula) {
    this.pelicula = { ...pelicula }; // Copiar el objeto para evitar modificar la lista original
    this.isEditing = true;
  }

  // Método para cancelar la edición o limpiar el formulario
  cancelarEdicion() {
    this.pelicula = new Pelicula();
    this.isEditing = false;
  }
}
