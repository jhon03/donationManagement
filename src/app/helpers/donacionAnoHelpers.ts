export const urldonacionAno = 'http://localhost:3000/api/donacionAnonima';

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

    listaportes: any = [
        {value:"utiles-escolares", key:"utiles-escolares"},
        {value:"matricula-academica", key:"matricula-academica"},
        {value:"desayunos-saludables", key:"desayunos-saludables"}, 
        {value: "Refrigerios", key: "Refrigerios"},
        {value: "Papeleria", key: "Papeleria"},
        {value: "Voluntariado", key: "Voluntariado"},
        {value: "Pasantía comunitaria", key: "Pasantía comunitaria"},
        {value: "Facilitador/Tallerista", key: "Facilitador/Tallerista"}
    ];
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
    aporte: string;
    estado: string;
    fechaCreacion: Date;
    uid: string;
}