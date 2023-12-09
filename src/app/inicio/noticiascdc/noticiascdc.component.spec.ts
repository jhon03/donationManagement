import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiascdcComponent } from './noticiascdc.component';

describe('NoticiascdcComponent', () => {
  let component: NoticiascdcComponent;
  let fixture: ComponentFixture<NoticiascdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiascdcComponent]
    });
    fixture = TestBed.createComponent(NoticiascdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
