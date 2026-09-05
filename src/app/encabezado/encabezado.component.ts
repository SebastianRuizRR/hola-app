import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonButton,
    RouterLink,
  ],
})
export class EncabezadoComponent {
  @Input() titulo = 'Mi aplicación';
  @Input() color = 'primary';
  @Input() subtitulo?: string;
  @Input() volverA?: string;
  @Input() mostrarAcerca = false;
}