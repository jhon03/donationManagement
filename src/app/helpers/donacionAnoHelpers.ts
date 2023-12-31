import { programaResponse } from "./programaHelpers";

//export const urldonacionAno = 'https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/donacionAnonima';




export const urlDonaciones = ' https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/donaciones';    //poner la del servidor de despliegue
//export const urlDonaciones = ' http://localhost:3000/api/donaciones';    //poner la del servidor de despliegue



export const urlDonacionPrograma = ' https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/donacionPrograma';
//export const urlDonacionPrograma = 'http://localhost:3000/api/donacionPrograma';


export const urlDonacionProyecto = ' https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/donacionAnonima';
//export const urlDonacionProyecto = 'http://localhost:3000/api/donacionAnonima';


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
    donaciones: donacionAResponse[];
}

export class proyectoResponse{
    id: string;
    nombre: string;
}

export class donacionAResponse {
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombreBenefactor: string;
    correo: string;
    celular: number;
    proyecto?: proyectoResponse;
    programa?: programaResponse;
    aporte: string;
    estado: string;
    detalles: string;
    fechaCreacion: Date;
    uid: string;
}

export class resDonacion{
    accion: string;
    msg: string;
    donacion: donacionAResponse;
  }
