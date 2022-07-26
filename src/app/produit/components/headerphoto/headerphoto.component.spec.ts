import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderphotoComponent } from './headerphoto.component';

describe('HeaderphotoComponent', () => {
  let component: HeaderphotoComponent;
  let fixture: ComponentFixture<HeaderphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderphotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
