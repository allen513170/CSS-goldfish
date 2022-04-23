import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn6Component } from './cssn6.component';

describe('Cssn6Component', () => {
  let component: Cssn6Component;
  let fixture: ComponentFixture<Cssn6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
