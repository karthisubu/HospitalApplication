import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/DoctorModel/doctor';
import { DoctorService } from 'src/app/DoctorService/doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private doctorService: DoctorService,
      private router: Router) { }

  ngOnInit(): void {
  }
   
  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data =>{
      console.log(data);
      alert("Doctor-Information Added Successfully")
      this.gotoHomepage();
    },
    err =>{ alert("Doctor-Information not Added")})
  }
  gotoHomepage(){
    this.router.navigate(['/homepage']);
  }
  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }
}
