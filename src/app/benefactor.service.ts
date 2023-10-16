import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BenefactorRequest, BenefactorResponse, urlBenefactor } from './helpers/benefactorHelpers';
@Injectable({
  providedIn: 'root'
})
export class BenefactorService {

  private urlBenefactor = urlBenefactor;


  constructor(private httpClient: HttpClient) { }

  crearBenefactor(benefactor: BenefactorRequest): Observable<BenefactorRequest>{
    return this.httpClient.post<BenefactorRequest>(this.urlBenefactor, benefactor);
  }
}
