import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  obtenerPeliculas() {
    throw new Error('Method not implemented.');
  }
  private peliculas: Pelicula[];

  constructor() {
    // Inicializar la lista de películas con algunos datos de ejemplo
    this.peliculas = [
      {
        id: 1,
        title: 'Pelicula 1',
        description: 'Descripción de la película 1',
        genre: 'Género 1',
        year: 2021,
      },
      {
        id: 2,
        title: 'Pelicula 2',
        description: 'Descripción de la película 2',
        genre: 'Género 2',
        year: 2022,
      },
      // Agregar más películas si es necesario
    ];
  }

  // Obtener todas las películas
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  // Agregar una nueva película
  agregarPelicula(pelicula: Pelicula): void {
    // Generar un nuevo id para la película (puedes usar una lógica diferente si es necesario)
    pelicula.id = this.peliculas.length + 1;
    this.peliculas.push(pelicula);
  }

  // Borrar una película por su id
  borrarPelicula(id: number): void {
    this.peliculas = this.peliculas.filter((pelicula) => pelicula.id !== id);
  }

  // Editar una película
  editarPelicula(pelicula: Pelicula): void {
    const index = this.peliculas.findIndex((p) => p.id === pelicula.id);
    if (index !== -1) {
      this.peliculas[index] = pelicula;
    }
  }
}
