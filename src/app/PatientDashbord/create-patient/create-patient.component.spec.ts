import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PatientService } from 'src/app/PatientService/patient.service';
import * as Rx from 'rxjs';
import { CreatePatientComponent } from './create-patient.component';

describe('CreatePatientComponent', () => {
  let component: CreatePatientComponent;
  let fixture: ComponentFixture<CreatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(CreatePatientComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreatePatientComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(CreatePatientComponent);
    const component = fixture.debugElement.componentInstance;
    let spy_savePatient = spyOn(component,"savePatient").and.returnValue([]);
    component.ngOnInit();
    expect(component.savePatient).toEqual([]);
  })

  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(CreatePatientComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(PatientService);
    let spy_createPatient = spyOn(service,"createPatient").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.savePatient();
    tick(100);
    expect(component.savePatient).toEqual([]);
  }))

  it('should call savePatient and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(CreatePatientComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(PatientService);
    let spy_createPatient = spyOn(service,"getPatientById").and.callFake(() => {
      return Rx.of([{id : 100}]).pipe(delay(2000));
    });
    component.savePatient();
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(true);
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(false);
    expect(component.savePatient).toEqual([{id : 100}]);
  }))
  
});


function delay(arg0: number): any {
  throw new Error('Function not implemented.');
}

