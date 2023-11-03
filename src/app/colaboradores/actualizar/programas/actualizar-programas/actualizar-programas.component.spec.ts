import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProgramasComponent } from './actualizar-programas.component';

describe('ActualizarProgramasComponent', () => {
  let component: ActualizarProgramasComponent;
  let fixture: ComponentFixture<ActualizarProgramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarProgramasComponent]
    });
    fixture = TestBed.createComponent(ActualizarProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
