import { Component } from '@angular/core';
import { Circulo } from '../modelos/circulo';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonInput, IonText, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonButton, IonText, IonInput, IonLabel, IonItem, 
    IonImg, IonCardContent, IonCardTitle, IonCardHeader, IonCard]
})

export class CirculoComponent {
resultado: any;
radio:number = 0;
  perimetro: number | null = null;

  calcular() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
   }
}
