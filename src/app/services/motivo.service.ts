import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { MotivosListRequest } from '../interfaces/motivos-list-request';
import { MotivosListResponse } from '../interfaces/motivos-list-response';

@Injectable({
  providedIn: 'root',
})
export class MotivoService {
  readonly baseUrl: string = environment.baseUrl;

  http = inject(HttpClient);

  getMotivos({
    que = 4,
    tope = '999',
    cmd,
    codigo,
    tipo,
    descripcion,
    tipo_motivo,
    iIdioma,
  }: MotivosListRequest): Observable<MotivosListResponse> {
    return this.http.post<MotivosListResponse>(`${this.baseUrl}/Motivos/MotivosList`, {
      que,
      tope,
      cmd,
      codigo,
      tipo,
      descripcion,
      tipo_motivo,
      iIdioma,
    });
  }
}
