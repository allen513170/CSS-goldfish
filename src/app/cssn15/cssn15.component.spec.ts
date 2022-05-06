import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn15Component } from './cssn15.component';

describe('Cssn15Component', () => {
  let component: Cssn15Component;
  let fixture: ComponentFixture<Cssn15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
