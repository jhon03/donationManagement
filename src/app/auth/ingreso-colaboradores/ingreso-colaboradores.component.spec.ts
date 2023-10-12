import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoColaboradoresComponent } from './ingreso-colaboradores.component';

describe('IngresoColaboradoresComponent', () => {
  let component: IngresoColaboradoresComponent;
  let fixture: ComponentFixture<IngresoColaboradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoColaboradoresComponent]
    });
    fixture = TestBed.createComponent(IngresoColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
