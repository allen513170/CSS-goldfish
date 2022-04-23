import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn8Component } from './cssn8.component';

describe('Cssn8Component', () => {
  let component: Cssn8Component;
  let fixture: ComponentFixture<Cssn8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
