import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaloginComponent } from './pruebalogin.component';

describe('PruebaloginComponent', () => {
  let component: PruebaloginComponent;
  let fixture: ComponentFixture<PruebaloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaloginComponent]
    });
    fixture = TestBed.createComponent(PruebaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
