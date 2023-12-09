import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadecdcComponent } from './acercadecdc.component';

describe('AcercadecdcComponent', () => {
  let component: AcercadecdcComponent;
  let fixture: ComponentFixture<AcercadecdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercadecdcComponent]
    });
    fixture = TestBed.createComponent(AcercadecdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
