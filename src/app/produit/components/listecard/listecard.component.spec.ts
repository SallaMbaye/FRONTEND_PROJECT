import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecardComponent } from './listecard.component';

describe('ListecardComponent', () => {
  let component: ListecardComponent;
  let fixture: ComponentFixture<ListecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
