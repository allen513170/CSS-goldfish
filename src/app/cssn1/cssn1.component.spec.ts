import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn1Component } from './cssn1.component';

describe('Cssn1Component', () => {
  let component: Cssn1Component;
  let fixture: ComponentFixture<Cssn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
