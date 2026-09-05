import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCard,
  IonCardContent,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    RouterLink,
  ],
})
export class AyudaPage {}