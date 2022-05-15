import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn18Component } from './cssn18.component';

describe('Cssn18Component', () => {
  let component: Cssn18Component;
  let fixture: ComponentFixture<Cssn18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
