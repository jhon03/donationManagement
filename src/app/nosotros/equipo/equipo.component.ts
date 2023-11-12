import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit  {

 constructor(private router:Router){}

 perfiles: any[] = [

{  nombre: 'Lina Vanessa Orbes', descripcion: 'Directora', avatar: 'assets/equipocdc/linaperfil.jpg'},
{  nombre: 'Soledad Muñoz', descripcion: 'Asistente Administrativa', avatar: 'assets/equipocdc/soledad.jpg'},
{  nombre: 'Diana Isabel Ayala', descripcion: 'Profesora Jardin Infantil', avatar: 'assets/equipocdc/perfilF.png'},
{  nombre: 'Nemi Tatiana Silva', descripcion: 'Profesora Jardin Infantil', avatar: 'assets/equipocdc/perfilF.png'},
{  nombre:  'Anika Nathalia Diaz', descripcion: 'Profesora Jardin Infantil', avatar: 'assets/equipocdc/perfilF.png'},
{  nombre: 'Luz Piedad Castellanos', descripcion: 'Profesora Jardin Infantil', avatar:'assets/equipocdc/perfilF.png'},
{  nombre: 'Stephanie Prieto Sanchez', descripcion: 'Psicologa', avatar:  'assets/equipocdc/perfilF.png'},
{  nombre: 'John Anderson Hoyos', descripcion: 'Ingeniero de Sistemas',  avatar: 'assets/equipocdc/avatarH.png'},
{  nombre: 'Maria Cecilia Henao', descripcion: 'Auxiliar oficios varios', avatar: 'assets/equipocdc/perfilF.png'},
{  nombre: 'Lilia Paez', descripcion: 'Auxiliar oficios varios', avatar: 'assets/equipocdc/perfilF.png'},
{  nombre: 'John Manuel Cubillos', descripcion: 'Guarda de Seguridad',  avatar: 'assets/equipocdc/avatarH.png'},
{  nombre: 'Tatiana Gonzalez', descripcion: 'Líder programa Rumbo Joven',  avatar: 'assetsequipocdc//avatarH.png'}


 ];
 

 ngOnInit(): void {
   
 }
}
