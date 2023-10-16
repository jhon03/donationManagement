export const urlColaborador = 'http://localhost:3000/api/colaborador';

export class ColaboradorResponse{
  
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombre:string;
    correo:string;
    contrasena:string;
    celular:number
   
}

export class ColaboradorRequest{
    listTipoIdentificacion: any = [
        {value: "cedula", key: "cedula"},
        {value:"pasaporte",key:"pasaporte"}
    ];
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombre:string;
    username:string;
    contrasena:string;
    correo:string;
    celular:number;
    cargo:string;
    rol:string;
    listRols:any=[
        {value:"CREADOR",key:"CREADOR"},
        {value:"MODIFICADOR",key:"MODIFICADOR"}
    ]
}