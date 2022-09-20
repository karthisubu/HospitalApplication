import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/DoctorModel/doctor';
import { DoctorService } from 'src/app/DoctorService/doctor.service';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctor : Doctor=new Doctor();
  doctors: Doctor[]=[];
  name!:string;

  constructor(private doctorService: DoctorService){}

  ngOnInit(): void {
    this.getDoctors();
  }
   
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data =>{
      this.doctors=data;
      console.log(this.doctors);
    });
  }
  
  onChange(event){
    this.name=event.target.value;
    var found=0;
    for(var i=0; i<this.doctors.length; i++){
      if(this.doctors[i].doctorName == this.name)
      {
        this.doctor= this.doctors[i];
        found=1;
      }
    }
    if(found==0){
      this.doctor=new Doctor();
    }
  }
}
