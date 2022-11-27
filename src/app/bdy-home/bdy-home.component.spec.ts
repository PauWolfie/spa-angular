import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdyHomeComponent } from './bdy-home.component';

describe('BdyHomeComponent', () => {
  let component: BdyHomeComponent;
  let fixture: ComponentFixture<BdyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
