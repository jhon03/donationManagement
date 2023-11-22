import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarDonacionComponent } from './confirmar-donacion.component';

describe('ConfirmarDonacionComponent', () => {
  let component: ConfirmarDonacionComponent;
  let fixture: ComponentFixture<ConfirmarDonacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarDonacionComponent]
    });
    fixture = TestBed.createComponent(ConfirmarDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
