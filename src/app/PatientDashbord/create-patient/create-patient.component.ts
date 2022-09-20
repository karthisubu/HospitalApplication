import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/DoctorModel/doctor';
import { DoctorService } from 'src/app/DoctorService/doctor.service';
import { Patient } from 'src/app/PatientModel/patient';
import { PatientService } from 'src/app/PatientService/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctors: Doctor[]=[];
  constructor(private patientService: PatientService,private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data =>{
      this.doctors=data;
    });
  }
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data =>{
      console.log(data);
      alert("Patient-Information Added Successfully")
      this.gotoHomepage();
    },
    err =>{ alert("Patient-Information not Added")})
    }

    gotoHomepage(){
        this.router.navigate(['/homepage']);
    }

    onSubmit(){
      console.log(this.patient);
      this.savePatient();
    }
}
