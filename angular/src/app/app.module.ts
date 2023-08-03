import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservaModalComponent } from './reserva-modal/reserva-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PeliculasComponent,
    ReservasComponent,
    ReservaModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
