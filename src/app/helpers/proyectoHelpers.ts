import { programaResponse } from "./programaHelpers";

export const urlProyectos = 'http://localhost:3000/api/proyecto'

export class proyectoRequest {

    nombre: string;
    descripcion: string;
    imagen: string;
    colCreador: string;
    colModificador: string;
    costo: number;
    fechaInicio: Date;
    fechaFinalizacion: Date;  
    opcionesProyectos: any = [
        {value: 'Social', key: 'Social'},
        {value: 'Comunitario', key: 'Comunitario'}
    ]
    tipoProyecto: string[];

    listaOpciones: any = [
        {value: 'Apadrinar', key: 'Apadrinar'},
        {value: 'Aporte Solidario', key: 'Aporte solidario'},
        {value: 'Voluntariado', key: 'Voluntariado'},
        {value: 'Facilitador', key: 'Facilitador'},
        {value: 'Pasantia Comunitaria', key: 'Pasantia Comunitaria'}
    ]
    opcionesColaboracion: string[];
    

}

export class responseProyect{
    total: number;
    proyecto: proyectoResponse[]
}

export class proyectoResponse{

    nombre: any;
    descripcion: string;
    imagen: string;
    costo: Float32Array;
    fechaInicio: Date;
    fechaFinalizacion: Date;
    colCreador: string;
    colModificador: string;
    estado: string;
    tipoProyecto: string[];
    programa: programaResponse;
    opcionesColaboracion: string[];
    uid: string;
    fechaCreacion: Date;

}




