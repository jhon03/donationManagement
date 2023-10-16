export const urldonacionAno = 'http://localhost:3000/api/donacionAnonima';

export const proyectoId = '6529f593bc286ddc222b1858'; //cuando se cree el proyecto en el front esta variable sale

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
        {value:"desayunos-saludables", key:"desayunos-saludables"}
    ];
    aporte: string;

}

export class donacionAResponse{
    tipoIdentificacion: string;
    numeroIdentificacion: number;
    nombreBenefactor: string;
    correo: string;
    celular: number;
    proyecto: string;
    aporte: string;
    estado: string;
    fechaCreacion: Date;
    uid: string;
}