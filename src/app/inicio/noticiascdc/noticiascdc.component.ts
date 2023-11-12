import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-noticiascdc',
  templateUrl: './noticiascdc.component.html',
  styleUrls: ['./noticiascdc.component.css']
})
export class NoticiascdcComponent implements OnInit {


  cards: any[] = [];

  totalItems = 10;
  itemsPorPagina = 1;
  currentPage = 1;

  //Método que responde al cambio de la página

  onPageChange(event: PageEvent): void{
   this.currentPage = event.pageIndex + 1;
   this.updateCards(); //Actualiza la lista de noticias
  }

  updateCards(): void{
    const startIndex = (this.currentPage - 1) * this.itemsPorPagina;
    const endIndex = startIndex + this.itemsPorPagina;
    this.cards = this.getData().slice(startIndex, endIndex);
  }


  getData(): any[] {

    return [
      {id: 1, fecha: 'Martes, 06 de Junio de 2023', title: 'Cine Foro', content: 'Cine foro al barrio es una iniciativa creada por los integrantes del proyecto Recrearte que busca fortalecer habilidades sociales a través de la lectura y oralidad; tratando diferentes problemáticas identificadas en el sector', photo: '/assets/noticias/cine.jpeg' },

      {id: 2, fecha: 'Miercoles, 03 de Agosto de 2023', title: 'Rumbo Joven: Esencialmente Humano', content: 'Rumbo Joven es un programa de empleabilidad que busca reducir el desempleo de jóvenes de población vulnerable de Cali, este programa orienta, forma y acompaña a los y las jóvenes en su proyecto de vida para la correcta inserción laboral.', photo: '/assets/noticias/rumbojoven2.jpg'}
    ];

    const data = [];
    for (let i = 1; i<= this.totalItems; i++) {
      data.push({id: i});
    }
    return data;
  }


  constructor() { 

    this.cards = this.getData();
  }

  ngOnInit(): void {


  }
}
