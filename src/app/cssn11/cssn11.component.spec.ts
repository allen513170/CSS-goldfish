import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn11Component } from './cssn11.component';

describe('Cssn11Component', () => {
  let component: Cssn11Component;
  let fixture: ComponentFixture<Cssn11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
