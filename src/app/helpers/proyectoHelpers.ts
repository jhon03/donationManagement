import { programaResponse } from "./programaHelpers";

//export const urlProyectos = 'https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/proyecto'

export const urlProyectos = 'http://localhost:3000/api/proyecto'


export class proyectoRequest {

    nombre: string;
    descripcion: string;
    imagenes: imagenDesc[];
    colCreador: string;
    colModificador: string;
    costo: number;
    fechaInicio: Date| string;
    fechaFinalizacion: Date| string;  
    opcionesProyectos: any = [
        {value: 'Social', key: 'Social'},
        {value: 'Comunitario', key: 'Comunitario'}
    ]
    tipoProyecto: string[];

    listaOpciones: any = [
        {value: 'Apadrinar', key: 'Apadrinar'},
        {value: 'Aporte Solidario', key: 'Aporte solidario'},
        {value: 'Aporte en Tiempo', key: 'Aporte en Tiempo'},
    ]
    opcionesDonacion: string[];
    
    listaProgramas: any =[

        {value: 'Programa1', key: 'Programa1'},
        {value: 'Programa2', key: 'Programa2'},
        {value: 'Programa3', key: 'Programa3'}
    ]
    opcionesProgramas: string[];

}

export class responseProyect{
    total: number;
    proyecto: proyectoResponse[]
}

export class proyectoIdRes{
    proyecto: proyectoResponse;
}

export class proyectoResponse{

    nombre: any;
    descripcion: string;
    imagenes: imagenDesc[];
    costo: number;
    fechaInicio: Date;
    fechaFinalizacion: Date;
    colCreador: string;
    colModificador: string;
    estado: string;
    tipoProyecto: string[];
    programa: programasdesc;
    opcionesDonacion: string[];
    uid: string;
    fechaCreacion: Date;
    opcionesProgramas: string[];

}

export class imagenDesc {
    url: string;
}

export class programasdesc {
    nombre:string;
}




