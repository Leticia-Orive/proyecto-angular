import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/peliculas';
import { PeliculasService } from '../services/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  // Lista de películas
  listaPeliculas: Pelicula[] = [];

  constructor(
    private peliculaService: PeliculasService,
    private http: HttpClient
  ) {}
  // Método para obtener todas las películas
  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }
  ngOnInit() {
    // Cargar la lista de películas al inicializar el componente
    this.cargarListaPeliculas();
  }

  // Método para cargar la lista de películas desde el servicio
  cargarListaPeliculas() {}

  // Método para agregar una película
  agregarPelicula(pelicula: Pelicula): Observable<any> {
    // Asegúrate de que el método 'post' devuelva un 'Observable<any>'
    return this.http.post<any>(this.apiUrl, pelicula);
  }

  // Método para editar una película
  editarPelicula(pelicula: Pelicula): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${pelicula.id}`, pelicula);
  }

  // Método para eliminar una película
  borrarPelicula(pelicula: Pelicula): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${pelicula.id}`);
  }

  // Método para cargar los datos de una película en el formulario para editar
  cargarPeliculaParaEditar(pelicula: Pelicula) {
    this.pelicula = { ...pelicula }; // Copiar el objeto para evitar modificar la lista original
    this.isEditing = true; // Entrar en modo de edición
  }

  // Método para cancelar la edición o limpiar el formulario
  cancelarEdicion() {
    this.pelicula = new Pelicula(); // Limpiar el formulario
    this.isEditing = false; // Salir del modo de edición
  }
}
