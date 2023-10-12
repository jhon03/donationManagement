import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondonacionesComponent } from './gestiondonaciones.component';

describe('GestiondonacionesComponent', () => {
  let component: GestiondonacionesComponent;
  let fixture: ComponentFixture<GestiondonacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiondonacionesComponent]
    });
    fixture = TestBed.createComponent(GestiondonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
