import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaNundoComponent } from './hola-nundo.component';

describe('HolaNundoComponent', () => {
  let component: HolaNundoComponent;
  let fixture: ComponentFixture<HolaNundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolaNundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaNundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
