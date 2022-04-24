import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn17Component } from './cssn17.component';

describe('Cssn17Component', () => {
  let component: Cssn17Component;
  let fixture: ComponentFixture<Cssn17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
