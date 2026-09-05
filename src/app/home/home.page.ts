import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule, // habilita [(ngModel)]
    RouterLink, // habilita routerLink
    RouterOutlet,
    EncabezadoComponent,
  ],
})
export class HomePage {
  nombre = ''; // se conecta con el input
  ciudad = '';
  saludo = ''; // lo que mostramos al apretar el botón

  saludar() {
    this.saludo = `¡Hola, ${this.nombre.trim()} de ${this.ciudad.trim()}!`;
  }
}
