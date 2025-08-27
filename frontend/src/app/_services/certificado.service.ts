// src/app/services/certificado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  private apiUrl = 'http://localhost:5000/certificados';

  constructor(private http: HttpClient) {}

  getCertificados(): Observable<Certificado[]> {
    return this.http.get<Certificado[]>(this.apiUrl);
  }

  getCertificadoPorId(id: string): Observable<Certificado> {
    return this.http.get<Certificado>(`${this.apiUrl}/${id}`);
  }

  criarCertificado(certificado: Certificado): Observable<Certificado> {
    return this.http.post<Certificado>(this.apiUrl, certificado);
  }

  atualizarCertificado(certificado: Certificado): Observable<Certificado> {
    return this.http.put<Certificado>(`${this.apiUrl}/${certificado._id}`, certificado);
  }

  deletarCertificado(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
