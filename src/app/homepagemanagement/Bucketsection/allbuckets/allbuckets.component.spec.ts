import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbucketsComponent } from './allbuckets.component';

describe('AllbucketsComponent', () => {
  let component: AllbucketsComponent;
  let fixture: ComponentFixture<AllbucketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbucketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
