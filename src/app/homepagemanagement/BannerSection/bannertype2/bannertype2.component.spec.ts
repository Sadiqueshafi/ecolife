import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannertype2Component } from './bannertype2.component';

describe('Bannertype2Component', () => {
  let component: Bannertype2Component;
  let fixture: ComponentFixture<Bannertype2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bannertype2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bannertype2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
