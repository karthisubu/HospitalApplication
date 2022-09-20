import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../DoctorModel/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  getDoctorURL: string;
  addDoctorURL: string;
  getDoctorByIdURL: string;

  constructor(private httpClient: HttpClient) {

    this.getDoctorURL ="http://localhost:9000/doctor/";
    this.addDoctorURL ="http://localhost:9000/doctor/";
    this.getDoctorByIdURL="http://localhost:9000/doctor/"
   }
    getDoctorsList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(this.getDoctorURL);
    }
    getDoctorById(selectedDoctorid: string): Observable<any>{
      let params1 = new HttpParams().set('id',selectedDoctorid);
      return this.httpClient.get(this.getDoctorByIdURL,{params:params1});
    }
  
    createDoctor(doctor: Doctor): Observable<Object>{
      return this.httpClient.post(this.addDoctorURL,doctor);
    }
}
