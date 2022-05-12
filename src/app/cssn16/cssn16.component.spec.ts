import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn16Component } from './cssn16.component';

describe('Cssn16Component', () => {
  let component: Cssn16Component;
  let fixture: ComponentFixture<Cssn16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
