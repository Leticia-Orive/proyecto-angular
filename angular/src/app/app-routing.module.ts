import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
  { path: 'register', component: RegisterComponent }, // Ruta para el componente de registro
  // Otras rutas que puedas tener en tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
