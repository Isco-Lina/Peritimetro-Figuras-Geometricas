import { Component } from '@angular/core';
import { TrianguloEscaleno } from '../modelos/triangulo-escaleno';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonInput, IonText, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonInput, IonText, IonButton, FormsModule, CommonModule]
  
})
export class TrianguloComponent {
resultado: any;
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  calcular() {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = triangulo.calcularPerimetro();
  }
}
