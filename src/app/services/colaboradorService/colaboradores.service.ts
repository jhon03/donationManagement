import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ColaboradorRequest, ColaboradorResponse, resColaborador, respuestaColaboradores, urlColaborador } from '../../helpers/colaboradoresHelpers';
import { TokenService } from 'src/app/security/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private urlCol = urlColaborador;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public obtenerColaboradores(): Observable<respuestaColaboradores>{
    return this.httpClient.get<respuestaColaboradores>(this.urlCol, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    }));
  }

  public obtenerColaborador(uid: string): Observable<resColaborador>{
    return this.httpClient.get<resColaborador>(`${urlColaborador}/findById/${uid}`, {
      observe: 'body',
    }).pipe(tap((body:any) =>{
       if(body && body.tokenNuevo){
          this.tokenService.obtenerTokenRenovado(body);
        }        
    }));
  }

  public crearColaborador(colaborador: ColaboradorRequest): Observable<resColaborador>{
    return this.httpClient.post<resColaborador>(this.urlCol, colaborador)
  }

  public confirmarCorreoCol(correo: string, codigo: string): Observable<resColaborador>{
    return this.httpClient.post<resColaborador>(`${urlColaborador}/verificar/correo`, {correo, codigo});
  }
}
