import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/Modelos/proyecto';
import { ProyectoService } from 'src/app/proyecto.service';
@Component({
  selector: 'app-proyectoscdc',
  templateUrl: './proyectoscdc.component.html',
  styleUrls: ['./proyectoscdc.component.css']
})
export class ProyectoscdcComponent {


  proyectos: Proyecto[] = [];


  constructor(private router: Router, private proyectoService: ProyectoService) { }

  ngOnInit(): void{
    this.loadProyectos();
  }

  loadProyectos(){
    this.proyectoService.getProyectos().subscribe(proyectos =>{
      this.proyectos = proyectos;
    })
  }

  redirigir(opcion: string): void{
    if(opcion === 'biblioteca'){
      this.router.navigate(['/biblioteca']);
   
     }else if (opcion === 'JardinInfantil'){
      this.router.navigate(['/JardinInfantil'])
     }


}

}