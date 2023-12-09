import { ProgramasService } from "../services/programaService/programas.service";
import { ColaboradorResponse } from "./colaboradoresHelpers";

export const urlProgramas = 'http://localhost:3000/api/programa';

//export const urlProgramas = ' https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/programa';


export class programaRequest {


    nombre:any;
    eslogan:string;
    descripcion:string;
    usuCreador: string;
    usuModificador:string;
    imagenes: descImg[];
    listaOpciones: any = [

        {value: 'Apadrinar', key: 'Apadrinar'},
        {value: 'Aporte Solidario', key: 'Aporte solidario'},
        {value: 'Aporte en Tiempo', key: 'Aporte en Tiempo'},
   
    ]
    opcionesColaboracion: string[];

    
}

export class responseProgram{
    total: number;
    programas: programaResponse[];
}



export class responseP{
    msg: string;
    programa: programaResponse;
}



export class programaResponse{
    
    nombre: string;
    eslogan: string;
    descripcion: string;
    imagenes: descImg[];
    usuCreador: string;
    usuModificador: string;
    opcionesColaboracion: string[];
    estado: string;
    colaborador: ColaboradorResponse;
    fechaCreacion: Date;
    fechaModificacion: Date;
    uid: string;
 
}



export class descImg {
    _id: string;
    url: string;
}