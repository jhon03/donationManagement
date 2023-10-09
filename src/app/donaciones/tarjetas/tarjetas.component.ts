import { Component } from '@angular/core';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  showDescription = [false, false];

  toggleDescription(index: number) {

    if(this.showDescription[index]){
      this.showDescription[index] = false;
    } else {
      this.showDescription[index] = true;
    }
  }

  utiles = `Semestralmente cada niño o niña deberá contar con una lista de materiales que incluye papelería, aseo, 
  juguetes, otros para el desarrollo de sus actividades escolares. 
  Esta lista tiene un valor aporximado de $00.00.`;
}
