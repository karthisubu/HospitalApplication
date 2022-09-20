import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/PatientModel/patient';
import { PatientService } from 'src/app/PatientService/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[]=[];
  patient: Patient = new Patient();
  id!: number;
  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.getPatients();  
  }

  onSubmit(){
    console.log(this.id);
   this.patientService. getPatientById(this.id).subscribe(data =>{
    this.patient = data;
   },
   error=>{this.pagenotfound();}
  )};

  pagenotfound(){
      this.router.navigate(['error page']); 
  }

  private getPatients(){
    this.patientService.getPatientsList().subscribe(data =>{
      this.patients = data;
    });     
  }
}
