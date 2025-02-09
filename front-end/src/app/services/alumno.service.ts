import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Basic ' + btoa('wmanzanero:admin1234'),
      'Content-Type': 'application/json'
    });
  }

  crearAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}crear-alumno/`, alumno, { headers: this.getHeaders() });
  }

  consultarAlumnosPorGrado(grado: number): Observable<any> {
    return this.http.get(`${this.apiUrl}consultar-alumno/${grado}/`, { headers: this.getHeaders() });
  }
}
