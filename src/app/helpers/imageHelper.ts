import { programaResponse } from "./programaHelpers";
import { proyectoResponse } from "./proyectoHelpers";

export const urlImg = 'http://localhost:3000/api/uploads/cloud';

//export const urlImg = ' https://secret-sierra-49778-7127c3bb9c8b.herokuapp.com/api/uploads/cloud'


export class resModeloImg {
    tokenNuevo?: string;
    msg: string;
    modelo: programaResponse | proyectoResponse;
}

