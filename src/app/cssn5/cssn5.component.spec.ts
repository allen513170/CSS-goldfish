import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssn5Component } from './cssn5.component';

describe('Cssn5Component', () => {
  let component: Cssn5Component;
  let fixture: ComponentFixture<Cssn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssn5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
