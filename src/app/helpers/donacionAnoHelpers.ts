import { programaResponse } from "./programaHelpers";

export const urldonacionAno = 'http://localhost:3000/api/donacionAnonima';
export const urlDonacionPrograma = 'http://localhost:3000/api/donacionPrograma';

export const proyectoId = '65346f395616f0334acdc79a'; //cuando se cree el proyecto en el front esta variable sale

export class donacionAno{
    listTipoIdentificacion: any = [
        {value: "cedula", key: "cedula"},
        {value:"pasaporte",key:"pasaporte"},
        {value:"otro", key:"otro"}
    ];
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    nombreBenefactor: string;
    correo: string;
    celular: string;

    aporte: string;
    
    
}

export class response{
    total: number;
    donacion: donacionAResponse[];
}

export class proyectoResponse{
    id: string;
    nombre: string;
}

export class donacionAResponse{
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombreBenefactor: string;
    correo: string;
    celular: number;
    proyecto: proyectoResponse;
    programa: programaResponse;
    aporte: string;
    estado: string;
    fechaCreacion: Date;
    uid: string;
}