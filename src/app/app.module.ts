import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './DoctorDashbord/doctor-list/doctor-list.component';
import { PatientListComponent } from './PatientDashbord/patient-list/patient-list.component';
import { CreatePatientComponent } from './PatientDashbord/create-patient/create-patient.component';
import { CreateDoctorComponent } from './DoctorDashbord/create-doctor/create-doctor.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    CreatePatientComponent,
    CreateDoctorComponent,
    PagenotfoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
