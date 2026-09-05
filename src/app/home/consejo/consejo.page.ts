import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCard,
  IonCardContent,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-consejo',
  templateUrl: './consejo.page.html',
  styleUrls: ['./consejo.page.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    RouterLink,
  ],
})
export class ConsejoPage {}