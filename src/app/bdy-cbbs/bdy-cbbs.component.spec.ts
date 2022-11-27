import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdyCbbsComponent } from './bdy-cbbs.component';

describe('BdyCbbsComponent', () => {
  let component: BdyCbbsComponent;
  let fixture: ComponentFixture<BdyCbbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdyCbbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdyCbbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
