import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn10Component } from './cssn10.component';

describe('Cssn10Component', () => {
  let component: Cssn10Component;
  let fixture: ComponentFixture<Cssn10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
