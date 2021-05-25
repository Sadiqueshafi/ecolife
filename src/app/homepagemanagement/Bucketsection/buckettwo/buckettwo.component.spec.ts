import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckettwoComponent } from './buckettwo.component';

describe('BuckettwoComponent', () => {
  let component: BuckettwoComponent;
  let fixture: ComponentFixture<BuckettwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuckettwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckettwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
