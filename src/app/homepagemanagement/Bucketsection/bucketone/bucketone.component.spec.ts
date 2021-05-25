import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketoneComponent } from './bucketone.component';

describe('BucketoneComponent', () => {
  let component: BucketoneComponent;
  let fixture: ComponentFixture<BucketoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
