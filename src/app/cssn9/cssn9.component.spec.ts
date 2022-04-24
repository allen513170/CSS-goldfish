import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn9Component } from './cssn9.component';

describe('Cssn9Component', () => {
  let component: Cssn9Component;
  let fixture: ComponentFixture<Cssn9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
