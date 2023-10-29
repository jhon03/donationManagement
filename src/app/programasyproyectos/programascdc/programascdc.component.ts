import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { programaRequest, programaResponse } from 'src/app/helpers/programaHelpers';
import { ProgramasService } from 'src/app/programas.service';


@Component({
  selector: 'app-programascdc',
  templateUrl: './programascdc.component.html',
  styleUrls: ['./programascdc.component.css']
})
export class ProgramascdcComponent implements OnInit, OnDestroy {

  private programaSuscripcion: Subscription;
  programas: programaResponse[];

constructor(private router: Router, private programaService: ProgramasService){}




ngOnDestroy(): void {
  this.programaSuscripcion?.unsubscribe();
}

ngOnInit(): void {
  this.programasLista();
    
}


programasLista(){
  this.programaSuscripcion = this.programaService.programaLista().subscribe(
    {
      next:(datos)=>{
        console.log(datos);
        this.programas = datos.programas;
      },
      error: (error)=>{
        console.log(error);
      }
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

  removeSpaces(option: string): string {
    console.log(option.replace(/\s+/g, ''));
    return option.replace(/\s+/g, '');
  }

}




