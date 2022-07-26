import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusmoinsComponent } from './plusmoins.component';

describe('PlusmoinsComponent', () => {
  let component: PlusmoinsComponent;
  let fixture: ComponentFixture<PlusmoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusmoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusmoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
