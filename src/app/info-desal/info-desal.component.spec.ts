import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDesalComponent } from './info-desal.component';

describe('InfoDesalComponent', () => {
  let component: InfoDesalComponent;
  let fixture: ComponentFixture<InfoDesalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDesalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDesalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
