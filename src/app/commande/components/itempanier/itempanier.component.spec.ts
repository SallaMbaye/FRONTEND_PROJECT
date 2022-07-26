import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempanierComponent } from './itempanier.component';

describe('ItempanierComponent', () => {
  let component: ItempanierComponent;
  let fixture: ComponentFixture<ItempanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItempanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItempanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
