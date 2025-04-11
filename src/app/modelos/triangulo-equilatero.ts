import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEquilatero extends FiguraGeometrica {
  constructor(private ladoA:number) {
    super();
  }

  calcularPerimetro(): number {
    return this.ladoA * 3;
  }
}
