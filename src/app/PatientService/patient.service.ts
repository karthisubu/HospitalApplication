import { Injectable } from '@angular/core';
import{HttpClient, HttpParams } from '@angular/common/http'
import { Patient } from '../PatientModel/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getPatientURL: string;
  addPatientURL: string;
  getPatientByIdURL: string;
   
  constructor(private httpClient: HttpClient) { 
    this.getPatientURL ="http://localhost:9000/patient/";
    this.addPatientURL ="http://localhost:9000/patient/";
    this.getPatientByIdURL ="http://localhost:9000/patient/";
  }
  getPatientsList(): Observable<Patient[]>{
  return this.httpClient.get<Patient[]>(this.getPatientURL);
  }
  getPatientById(selectedPatientid: number): Observable<Patient>{
    let params1 = new HttpParams().set('id',selectedPatientid);
    return this.httpClient.get<Patient>(`${this.getPatientByIdURL}/${selectedPatientid}`);

  }
  
  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(this.addPatientURL,patient);
  }
}
