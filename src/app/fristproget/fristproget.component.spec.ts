import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristprogetComponent } from './fristproget.component';

describe('FristprogetComponent', () => {
  let component: FristprogetComponent;
  let fixture: ComponentFixture<FristprogetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FristprogetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FristprogetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
