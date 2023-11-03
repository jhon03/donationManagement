import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBenefactoresComponent } from './ver-benefactores.component';

describe('VerBenefactoresComponent', () => {
  let component: VerBenefactoresComponent;
  let fixture: ComponentFixture<VerBenefactoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBenefactoresComponent]
    });
    fixture = TestBed.createComponent(VerBenefactoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
