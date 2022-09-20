import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import * as Rx from 'rxjs';
import { Doctor } from 'src/app/DoctorModel/doctor';
import { DoctorService } from 'src/app/DoctorService/doctor.service';
import { DoctorListComponent } from './doctor-list.component';

describe('DoctorListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(DoctorListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(DoctorListComponent);
    const component = fixture.debugElement.componentInstance;
    let spy_getDoctorsList = spyOn(component,"getDoctorsList").and.returnValue([]);
    component.ngOnInit();
    expect(component.doctors).toEqual([]);
  })

  it('should call getDoctorsList and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(DoctorListComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(DoctorService);
    let spy_getDoctorsList = spyOn(service,"getDoctorsList").and.callFake(() => {
      return Rx.of([{id : 100}]).pipe(delay(100));
    });
    component.getDoctorsList();
    tick(100);
    expect(component.doctors).toEqual([]);
  }))

  it('should call getDoctorsList and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(DoctorListComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(DoctorService);
    let spy_getDoctorsList = spyOn(service,"getDoctorsList").and.callFake(() => {
      return Rx.of([{id : 100}]).pipe(delay(2000));
    });
    component.getDoctorsList();
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(true);
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(false);
    expect(component.doctors).toEqual([{id : 100}]);
  }))
  
});


function delay(arg0: number): Rx.OperatorFunction<{ id: number; }[], Doctor[]> {
  throw new Error('Function not implemented.');
}

