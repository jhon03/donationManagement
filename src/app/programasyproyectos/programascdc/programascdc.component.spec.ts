import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramascdcComponent } from './programascdc.component';

describe('ProgramascdcComponent', () => {
  let component: ProgramascdcComponent;
  let fixture: ComponentFixture<ProgramascdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramascdcComponent]
    });
    fixture = TestBed.createComponent(ProgramascdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
