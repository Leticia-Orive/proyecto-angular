// pelicula.model.ts

export class Pelicula {
  id: number;
  title: string;
  description: string;
  genre: string;
  year: number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.genre = '';
    this.year = 0;
  }
}
