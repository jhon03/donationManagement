import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aportedel-tiempo',
  templateUrl: './aportedel-tiempo.component.html',
  styleUrls: ['./aportedel-tiempo.component.css']
})
export class AportedelTiempoComponent implements OnInit {

  Requisitos = "Hoja de vida actualizada,  Fotocopia de Documento de Identidad, Certificado de Afiliación al Sistema de Salud; enviar los documentos al correo: centrocomunirarioasis@usbcali.edu.co "

  ngOnInit(): void {
    this.monstrarRequisitos;
    
  }

  monstrarRequisitos(){
      Swal.fire(this.Requisitos);
  }

}
