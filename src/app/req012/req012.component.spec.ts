import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Req012Component } from './req012.component';

describe('Req012Component', () => {
  let component: Req012Component;
  let fixture: ComponentFixture<Req012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Req012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Req012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
