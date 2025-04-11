import { Component } from '@angular/core';
import { IonSelectOption, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent,IonSelect } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloComponent } from "../triangulo/triangulo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSelectOption, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent,IonSelect,CirculoComponent,FormsModule,CommonModule,TrianguloComponent],
})
export class HomePage {
figuraSeleccionada: string="";
  constructor() {}
}
