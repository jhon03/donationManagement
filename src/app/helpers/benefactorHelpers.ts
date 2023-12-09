export const urlBenefactor = 'http://localhost:3000/api/benefactor/crear';
//export const urlBenefactor = 'https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/benefactor/crear';





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


