import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn3Component } from './cssn3.component';

describe('Cssn3Component', () => {
  let component: Cssn3Component;
  let fixture: ComponentFixture<Cssn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
