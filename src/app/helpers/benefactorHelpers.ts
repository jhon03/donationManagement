export const urlBenefactor = 'http://localhost:3000/api/benefactor/crear';

export class BenefactorResponse{
  
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombre:string;
    correo:string;
    celular:number;
    estado: boolean;
    rol: string;
   
}


export class BenefactorRequest{
    listTipoIdentificacion: any = [
        {value: "cedula", key: "cedula"},
        {value:"pasaporte",key:"pasaporte"},
        {value:"otro", key:"otro"}
    ];
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombre:string;
    correo:string;
    celular:number;
    contrasena: string;
    
}


