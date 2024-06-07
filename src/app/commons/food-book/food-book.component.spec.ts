import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBookComponent } from './food-book.component';

describe('FoodBookComponent', () => {
  let component: FoodBookComponent;
  let fixture: ComponentFixture<FoodBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodBookComponent]
    });
    fixture = TestBed.createComponent(FoodBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
