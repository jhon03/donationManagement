export const urlColaborador = 'http://localhost:3000/api/colaborador';
//export const urlColaborador = ' https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/colaborador';

export class resColaborador {
    tokenNuevo?: string;
    accion: string;
    msg: string;
    colaborador: ColaboradorResponse;
}

export class respuestaColaboradores {
    tokenNuevo?: string;
    total: number;
    colaboradores: ColaboradorResponse[];
}

export class ColaboradorResponse{
    uid: string;
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombre:string;
    username: string;
    correo:string;
    cargo: string;
    celular:number;
    fechaCreacion: Date | string;
    fechaModificacion: Date| string;
    rol: any = {
        id: '',
        rol: '',
    }
   
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