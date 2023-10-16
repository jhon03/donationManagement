export const urlProgramas = 'http://localhost:3000/api/programa';

export class programaRequest {

    nombre:any;
    eslogan:string;
    descripcion:string;
    usuCreador: string;
    usuModificador:string;
    imagen: string;
    listaOpciones: any = [

        {value: 'Apadrinar', key: 'Apadrinar'},
        {value: 'Aporte Solidario', key: 'Aporte solidario'},
        {value: 'Voluntariado', key: 'Voluntariado'},
        {value: 'Facilitador', key: 'Facilitador'},
        {value: 'Pasantia Comunitaria', key: 'Pasantia Comunitaria'}
    ]
    opcionesColaboracion: string[];
}


export class programaResponse{
    
    nombre: string;
    eslogan: string;
    descripcion: string;
    imagen: string;
    usuCreador: string;
    usuModificador: string;
    opcionesColaboracion: string[];
    estado: boolean;
    colaborador: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    uid: string;
}