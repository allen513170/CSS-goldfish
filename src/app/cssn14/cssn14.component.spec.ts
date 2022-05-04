import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn14Component } from './cssn14.component';

describe('Cssn14Component', () => {
  let component: Cssn14Component;
  let fixture: ComponentFixture<Cssn14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
