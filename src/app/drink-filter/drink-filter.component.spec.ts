import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkFilterComponent } from './drink-filter.component';

describe('DrinkFilterComponent', () => {
  let component: DrinkFilterComponent;
  let fixture: ComponentFixture<DrinkFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
