import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedComponent } from './curated.component';

describe('CuratedComponent', () => {
  let component: CuratedComponent;
  let fixture: ComponentFixture<CuratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
