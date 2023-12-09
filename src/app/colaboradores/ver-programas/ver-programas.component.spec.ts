import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProgramasComponent } from './ver-programas.component';

describe('VerProgramasComponent', () => {
  let component: VerProgramasComponent;
  let fixture: ComponentFixture<VerProgramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerProgramasComponent]
    });
    fixture = TestBed.createComponent(VerProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
