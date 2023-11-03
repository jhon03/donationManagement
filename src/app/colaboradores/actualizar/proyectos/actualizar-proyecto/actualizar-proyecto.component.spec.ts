import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProyectoComponent } from './actualizar-proyecto.component';

describe('ActualizarProyectoComponent', () => {
  let component: ActualizarProyectoComponent;
  let fixture: ComponentFixture<ActualizarProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarProyectoComponent]
    });
    fixture = TestBed.createComponent(ActualizarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
