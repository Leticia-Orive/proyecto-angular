import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reserva } from '../models/reserva';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-reserva-modal',
  templateUrl: './reserva-modal.component.html',
  styleUrls: ['./reserva-modal.component.css'],
})
export class ReservaModalComponent {
  reserva: Reserva;
  editar: boolean; // Agrega la propiedad 'editar' al componente

  constructor(
    public dialogRef: MatDialogRef<ReservaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reserva = { ...data.reserva };
    this.editar = data.editar; // Asigna el valor de 'editar' desde los datos inyectados
  }

  onSaveClick(): void {
    // Lógica para guardar la reserva y cerrar el modal con el resultado
    this.dialogRef.close({ reserva: this.reserva, editar: this.data.editar });
  }

  onCancelClick(): void {
    // Cerrar el modal sin guardar cambios
    this.dialogRef.close();
  }
}
