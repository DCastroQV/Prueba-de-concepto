import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Req010Component } from './req010.component';

describe('Req010Component', () => {
  let component: Req010Component;
  let fixture: ComponentFixture<Req010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Req010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Req010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
