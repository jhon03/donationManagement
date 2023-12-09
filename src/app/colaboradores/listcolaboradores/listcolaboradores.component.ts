import { Component, OnInit,OnDestroy } from '@angular/core';
import { ColaboradoresService } from 'src/app/services/colaboradorService/colaboradores.service';

@Component({
  selector: 'app-listcolaboradores',
  templateUrl: './listcolaboradores.component.html',
  styleUrls: ['./listcolaboradores.component.css']
})
export class ListcolaboradoresComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private colaboradorService: ColaboradoresService){}

  




}
