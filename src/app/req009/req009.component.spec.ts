import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Req009Component } from './req009.component';

describe('Req009Component', () => {
  let component: Req009Component;
  let fixture: ComponentFixture<Req009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Req009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Req009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
