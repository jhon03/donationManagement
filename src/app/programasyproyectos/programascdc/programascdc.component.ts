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


  cards: any[] = [

    {titleCard: 'Jardin Infantil',  subtitle:'Programa', content: 'Jardín Infantil es una institución ampliamente reconocida, que favorece por año un promedio de 80 niños del barrio Siloé.', photo: '/assets/jardin.jpg', buttonVol: '¿Quiero Realizar Voluntariado?', avatar1:'/assets/logoJardin.png'},


    {titleCard: 'Biblioteca',subtitle:'Programa', content: 'La Biblioteca Rafael Pombo promueve servicios y proyectos que fomenten la lectura, la escritura, la oralidad, apropiación y uso de las tic para la transformación social de la población infantil, juvenil, adultos, adultos mayores del barrio de Siloé y sus alrededores.', photo: '/assets/biblioteca2.jpg', title: 'Recrearte', href: "https://docs.wompi.co/docs/colombia/",  button3: 'CONTRIBUIR', avatar1:'/assets/biblioteca.jpg' 
    },
   
    { titleCard: 'Siloe detrás de la Lupa', subtitle: 'Programa_biblioteca', content: 'propuesta de aprendizaje con los adultos mayores de la comuna 20 en la que se busca generar espacios en el marco del bienestar físico, mental y espiritual a través de diferentes intervenciones respondiendo a las necesidades e intereses de la comunidad', photo: '/assets/jardin.jpg', buttonAp: '¿Quiero apadrinar la Educación de un Niño/Niña', buttonVol: '¿Quiero Realizar Voluntariado?', avatar1:'/assets/logousb.png' }, 

    
    { titleCard: 'Recrearte', subtitle: 'Programa_biblioteca', content: 'propuesta de aprendizaje colaborativo que bsca generar espacios de sana convivencia, lectura, escritura y oralidad a través de diferentes intervenciones lúdicas, artísticas, de apropiación y uso de las TIC fortaleciendo la formación integral del ser. Participan niños, niñas y adolescentes', photo: '/assets/jardin.jpg', buttonAp: '¿Quiero apadrinar la Educación de un Niño/Niña', buttonVol: '¿Quiero Realizar Voluntariado?', avatar1:'/assets/logousb.png' }, 


  ];

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
        console.log(datos.programas);
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

}
