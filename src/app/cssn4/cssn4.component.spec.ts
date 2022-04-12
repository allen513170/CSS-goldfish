import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn4Component } from './cssn4.component';

describe('Cssn4Component', () => {
  let component: Cssn4Component;
  let fixture: ComponentFixture<Cssn4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
