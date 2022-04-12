import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn2Component } from './cssn2.component';

describe('Cssn2Component', () => {
  let component: Cssn2Component;
  let fixture: ComponentFixture<Cssn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
