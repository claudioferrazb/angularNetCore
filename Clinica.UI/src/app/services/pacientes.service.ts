import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  baseURL = 'https://localhost:7260';

  constructor(private http: HttpClient) { }

  getAllPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.baseURL+'/api/pacientes');
  }

  salvarPaciente(addPacienteRequest: Paciente): Observable<Paciente> {
    addPacienteRequest.id = 0;
    return this.http.post<Paciente>(this.baseURL+'/api/pacientes', addPacienteRequest);
  }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(this.baseURL +'/api/pacientes/' + id)
  }

  updatePaciente(id: number, updatePacienteRequest: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(this.baseURL +'/api/pacientes/' + id, updatePacienteRequest)
  }

  deletePaciente(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>(this.baseURL +'/api/pacientes/' + id)
  }
}
