import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/services/programaService/programas.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-programascdc',
  templateUrl: './programascdc.component.html',
  styleUrls: ['./programascdc.component.css']
})
export class ProgramascdcComponent implements OnInit, OnDestroy {

private programaSuscripcion: Subscription;
private paginaSuscripcion: Subscription;
programas: programaResponse[];
pagina: number = 1;
limite: number = 2;
totalPro:number;
totalPaginas: number;





constructor(private router: Router, private programaService: ProgramasService){}




ngOnDestroy(): void {
  this.paginaSuscripcion?.unsubscribe();
  this.programaSuscripcion?.unsubscribe();
}

ngOnInit(): void {
  this.programasLista();
  this.obtenerPagina();
    
}


public cambiarPagina(opcion: string){
  if(opcion === 'aumentar' && this.pagina === this.totalPaginas){
    return console.log("no hay mas proyectos");
  }
  if(opcion === 'aumentar'){
    this.programaService.incrementarPagina()
  }
  else if(opcion === 'disminuir'){
    this.programaService.decrementarPagina();
  }
  this.programasLista();
}


programasLista(){
  this.programaSuscripcion = this.programaService.programaListaVista(this.pagina, this.limite).subscribe(
    {
      next:(datos)=>{
        console.log(datos);
        this.programas = datos.programas;
        this.totalPro = datos.total;
        this.totalPaginas = Math.ceil(datos.total / this.limite);
      },
      error: (error)=>{
        console.log(error);
      }
    }
  )
}

private obtenerPagina(){
  this.paginaSuscripcion = this.programaService.getPaginaActual().subscribe(
    {
      next:(data)=>this.pagina=data,
      error:(error)=>console.log(error),
    }
  )
}


redirigir(opcionesColaboracion: string): void{
  if(opcionesColaboracion === 'Apadrinar'){
    this.router.navigate(['/apadrinamiento']);
 
   }else if (opcionesColaboracion === 'Aporte Solidario'){
    this.router.navigate(['/aportesolidario'])
   
  }else if (opcionesColaboracion === 'Aporte en Tiempo'){
    this.router.navigate(['/aportedeltiempo'])
   }

   
  }

  paginasbutton(){
    this.pagina = this.pagina + 1;
    this.programasLista();
  }

  removeSpaces(option: string): string {
    console.log(option.replace(/\s+/g, ''));
    return option.replace(/\s+/g, '');
  }

}




