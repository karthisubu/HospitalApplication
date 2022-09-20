import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './DoctorDashbord/create-doctor/create-doctor.component';
import { DoctorListComponent } from './DoctorDashbord/doctor-list/doctor-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatePatientComponent } from './PatientDashbord/create-patient/create-patient.component';
import { PatientListComponent } from './PatientDashbord/patient-list/patient-list.component';

const routes: Routes = [
  {path: 'patients', component: PatientListComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: 'doctors', component: DoctorListComponent},
  {path: 'create-doctor', component: CreateDoctorComponent},
  {path: 'homepage',component:HomePageComponent},
  {path: '',redirectTo: 'doctors', pathMatch:'full'},
  {path: '',redirectTo: 'patients', pathMatch:'full'},
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
