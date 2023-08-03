export class Reserva {
  // Propiedades y métodos de la clase Reserva
  id: number;
  nombreCliente: string;
  fechaInicio: Date;
  fechaFin: Date;
  cantidadPersonas: number;
  titulo: string;
  constructor(
    id: number,
    nombreCliente: string,
    fechaInicio: Date,
    fechaFin: Date,
    cantidadPersonas: number,
    titulo: string
  ) {
    this.id = id;
    this.nombreCliente = nombreCliente;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.cantidadPersonas = cantidadPersonas;
    this.titulo = titulo;
  }
  // Creación de una nueva instancia de Reserva con parámetro opcional
  nuevaReserva = new Reserva(
    1,
    'Nombre del Cliente',
    new Date(),
    new Date(),
    3,
    'nombre del titulo'
  );
  // Método para calcular la duración de la reserva en días
  calcularDuracion(): number {
    const inicio = this.fechaInicio.getTime();
    const fin = this.fechaFin.getTime();
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((fin - inicio) / milisegundosPorDia));
  }

  // Método para validar que los datos de la reserva sean válidos
  validarDatos(): boolean {
    if (
      this.nombreCliente &&
      this.fechaInicio &&
      this.fechaFin &&
      this.cantidadPersonas > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  // Método para calcular el costo total de la reserva
  calcularCostoTotal(): number {
    // Supongamos que cada día de reserva tiene un costo fijo de $100
    const duracion = this.calcularDuracion();
    return duracion * 100;
  }

  // Método para verificar si la reserva es para un grupo grande
  esGrupoGrande(): boolean {
    return this.cantidadPersonas >= 10;
  }

  // Método para obtener el estado de la reserva (por ejemplo, confirmada, pendiente, cancelada, etc.)
  obtenerEstadoReserva(): string {
    // Lógica para determinar el estado según las fechas, pagos, etc.
    // Puedes retornar un string con el estado actual de la reserva
    return 'Confirmada';
  }

  // Método para validar la fecha de inicio de la reserva
  validarFechaInicio(): boolean {
    // Lógica para verificar que la fecha de inicio no sea anterior a la fecha actual, por ejemplo
    return this.fechaInicio >= new Date();
  }

  // Agrega los métodos adicionales según las necesidades de tu aplicación
  // Por ejemplo:
  otroMetodo(): void {
    // Lógica del método
  }
}
