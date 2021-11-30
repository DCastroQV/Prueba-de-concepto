import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Req011Component } from './req011.component';

describe('Req011Component', () => {
  let component: Req011Component;
  let fixture: ComponentFixture<Req011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Req011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Req011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
