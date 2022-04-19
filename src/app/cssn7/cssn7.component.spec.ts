import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn7Component } from './cssn7.component';

describe('Cssn7Component', () => {
  let component: Cssn7Component;
  let fixture: ComponentFixture<Cssn7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
