import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
} from '@ionic/angular';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
  imports: [
    IonContent,
    IonButton,
    RouterLink,
    EncabezadoComponent,
  ],
})
export class AcercaPage {}