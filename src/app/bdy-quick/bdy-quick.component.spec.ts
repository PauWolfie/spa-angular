import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdyQuickComponent } from './bdy-quick.component';

describe('BdyQuickComponent', () => {
  let component: BdyQuickComponent;
  let fixture: ComponentFixture<BdyQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdyQuickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdyQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
