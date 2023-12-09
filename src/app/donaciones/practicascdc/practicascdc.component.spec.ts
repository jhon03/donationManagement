import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticascdcComponent } from './practicascdc.component';

describe('PracticascdcComponent', () => {
  let component: PracticascdcComponent;
  let fixture: ComponentFixture<PracticascdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticascdcComponent]
    });
    fixture = TestBed.createComponent(PracticascdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
