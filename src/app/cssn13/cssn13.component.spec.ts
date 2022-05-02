import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn13Component } from './cssn13.component';

describe('Cssn13Component', () => {
  let component: Cssn13Component;
  let fixture: ComponentFixture<Cssn13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
