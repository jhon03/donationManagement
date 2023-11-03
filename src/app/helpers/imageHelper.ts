import { programaResponse } from "./programaHelpers";
import { proyectoResponse } from "./proyectoHelpers"

export const urlImg = 'http://localhost:3000/api/uploads/cloud'

export class resModeloImg {
    msg: string;
    modelo: programaResponse | proyectoResponse;
}

