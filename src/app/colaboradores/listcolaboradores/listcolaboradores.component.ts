import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColaboradorResponse } from 'src/app/helpers/colaboradoresHelpers';
import { ColaboradoresService } from 'src/app/services/colaboradorService/colaboradores.service';

@Component({
  selector: 'app-listcolaboradores',
  templateUrl: './listcolaboradores.component.html',
  styleUrls: ['./listcolaboradores.component.css']
})
export class ListcolaboradoresComponent implements OnInit, OnDestroy {

  colaboradoresList: ColaboradorResponse[];

  private colaboradoresSuscripcion: Subscription;

  ngOnDestroy(): void {
    this.colaboradoresSuscripcion?.unsubscribe();
  }

  ngOnInit(): void {
    this.obtenerColaboradores();
  }


  constructor(private colaboradorService: ColaboradoresService){}

  obtenerColaboradores(){
    this.colaboradoresSuscripcion = this.colaboradorService.obtenerColaboradores().subscribe({
      next: (data) =>{
        console.log(data);
        this.colaboradoresList = data.colaboradores;
      },
      error: (error) => console.log(error),
    })
  }




}
